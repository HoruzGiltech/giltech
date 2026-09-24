import { useCallback, useEffect, useRef, useState } from 'react';
import { Bell, CheckCircle2, Compass, ExternalLink, Pause, Play, RotateCcw, Volume2, VolumeX } from 'lucide-react';

export const COMPASS_URL = "https://productivity-sistem-register.vercel.app/";

// Paleta de Compass
const TEAL = "#197c78";
const CORAL = "#ef8e73";

// Relación de aspecto del escenario en escritorio (la captura más ancha)
const DESKTOP_ASPECT = 1901 / 877;

const IMAGES = {
  resumen: { src: "/compass/resumen.png", w: 1901, h: 877 },
  actividades: { src: "/compass/actividades.png", w: 1901, h: 860 },
  reportes: { src: "/compass/reportes.png", w: 1906, h: 868 },
  equipo: { src: "/compass/equipo.png", w: 1907, h: 861 },
};

/*
 * Cada escena tiene su narración (MP3 generado con voz es-MX), subtítulos por frase
 * y "tomas": en el segundo `at` la cámara se acerca a `box` ([left, top, width, height]
 * en % de la captura) con el `zoom` indicado y muestra la etiqueta `label`.
 */
const SCENES = [
  {
    id: "intro",
    title: "Compass",
    audio: "/compass/01-intro.mp3",
    duration: 9.8,
    captions: [
      [0, "¿Tu equipo trabaja sin control?"],
      [2.4, "Tareas que se olvidan, clientes sin respuesta, y nadie sabe quién hace qué."],
      [7.4, "Para eso creamos Compass."],
    ],
  },
  {
    id: "resumen",
    title: "Resumen",
    audio: "/compass/02-resumen.mp3",
    duration: 12.7,
    image: IMAGES.resumen,
    captions: [
      [0, "Apenas entras, ves el pulso de tu equipo: cuántas actividades están abiertas, en progreso, pendientes o cerradas."],
      [7.9, "Y abajo, lo más urgente primero, con su responsable y su estado."],
    ],
    shots: [
      { at: 0, zoom: 1 },
      { at: 1.5, zoom: 1.2, box: [19.2, 38.2, 78.1, 17.9], label: "Todo tu equipo en un vistazo" },
      { at: 7.9, zoom: 1.55, box: [19.2, 58.7, 50.2, 41.3], label: "Lo más urgente, primero" },
    ],
  },
  {
    id: "actividades",
    title: "Actividades",
    audio: "/compass/03-actividades.mp3",
    duration: 13.4,
    image: IMAGES.actividades,
    captions: [
      [0, "Cada tarea queda registrada, con fecha, responsable y estado."],
      [4.9, "Filtras por persona, por estado, o por trabajo de oficina y de campo, y asignas en un solo clic."],
      [11.5, "Nada se pierde."],
    ],
    shots: [
      { at: 0, zoom: 1 },
      { at: 0.6, zoom: 1.25, box: [20, 41.9, 76.3, 8.1], label: "Cada tarea con responsable y estado" },
      { at: 4.9, zoom: 1.55, box: [19.2, 31.2, 56.6, 4.3], label: "Filtra por persona, estado, oficina o campo" },
      { at: 9.3, zoom: 1.9, box: [84.7, 42.4, 11.6, 43], label: "Asigna en un clic" },
      { at: 11.5, zoom: 1.1, box: [19.2, 38.1, 78.1, 51.6], label: "Nada se pierde" },
    ],
  },
  {
    id: "alertas",
    title: "Alertas",
    audio: "/compass/04-alertas.mp3",
    duration: 5.0,
    image: IMAGES.resumen,
    captions: [[0, "Compass te avisa cuando algo necesita tu atención, antes de que se venza un plazo."]],
    shots: [
      { at: 0, zoom: 1 },
      { at: 0.5, zoom: 2.4, box: [88.2, 1.5, 3.2, 8.5], label: "Alertas antes de que venza un plazo" },
    ],
    toastAt: 1.4,
  },
  {
    id: "reportes",
    title: "Reportes y SLA",
    audio: "/compass/05-reportes.mp3",
    duration: 8.9,
    image: IMAGES.reportes,
    captions: [[0, "En reportes mides si tu equipo cumple los plazos acordados: tiempos de respuesta, tiempos de resolución, y la carga de trabajo de cada responsable."]],
    shots: [
      { at: 0, zoom: 1 },
      { at: 1.2, zoom: 1.2, box: [19, 38.2, 77.9, 15.4], label: "Cumplimiento de plazos (SLA)" },
      { at: 6.2, zoom: 1.6, box: [19, 56.5, 51.2, 19.6], label: "Carga de trabajo por responsable" },
    ],
  },
  {
    id: "equipo",
    title: "Equipo",
    audio: "/compass/06-equipo.mp3",
    duration: 6.8,
    image: IMAGES.equipo,
    captions: [[0, "Y tú mantienes el control: decides quién entra, con qué rol, y en qué proyecto trabaja cada persona."]],
    shots: [
      { at: 0, zoom: 1 },
      { at: 0.4, zoom: 1.2, box: [19.9, 42.4, 77.4, 24.4], label: "Accesos bajo tu control" },
      { at: 2.9, zoom: 1.8, box: [45.1, 48.2, 43, 15.1], label: "Roles y permisos por persona" },
      { at: 5.0, zoom: 2.3, box: [1, 12.4, 14.3, 8.1], label: "Varios proyectos, un solo sistema" },
    ],
  },
  {
    id: "cierre",
    title: "Pruébalo",
    audio: "/compass/07-cierre.mp3",
    duration: 6.0,
    captions: [
      [0, "Compass."],
      [1.6, "Menos caos, más control."],
      [4.25, "Pruébalo hoy."],
    ],
  },
];

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
const lastAt = (items, t, getAt) => items.reduce((acc, item) => (getAt(item) <= t ? item : acc), items[0]);

function CompassLogo({ size = 20, bg = TEAL, className = "" }) {
  return (
    <div
      className={`flex items-center justify-center rounded-xl rounded-bl-sm text-white shrink-0 ${className}`}
      style={{ background: bg, width: size * 1.8, height: size * 1.8 }}
    >
      <Compass size={size} />
    </div>
  );
}

// Captura real con movimiento de cámara y resaltado de la función que se narra
function ScreenScene({ scene, t, stageAspect }) {
  const { image, shots } = scene;
  const shot = lastAt(shots, t, (s) => s.at);
  const imageAspect = image.w / image.h;
  const r = Math.max(1, imageAspect / stageAspect);
  // En pantallas angostas (r alto) se acerca un poco más para que el texto sea legible
  const z = shot.box && r > 1.3 ? shot.zoom * 1.3 : shot.zoom;
  const [bx, by, bw, bh] = shot.box ?? [0, 0, 100, 100];
  // Si el recuadro no cabe a lo ancho, se encuadra su inicio en vez del centro
  const visibleW = 100 / (r * z);
  const focusX = bw > visibleW ? bx + visibleW / 2 - 1 : bx + bw / 2;
  const focusY = by + bh / 2;
  const tx = clamp(-z * (focusX - 50), -(50 * z - 50 / r), 50 * z - 50 / r);
  const ty = clamp(-z * (focusY - 50), -(50 * z - 50), 50 * z - 50);
  const showToast = scene.toastAt !== undefined && t >= scene.toastAt;

  return (
    <div className="absolute inset-0 bg-[#f7f8f5] overflow-hidden">
      <div
        className="absolute top-0 left-1/2 h-full"
        style={{
          width: `${r * 100}%`,
          transform: `translate(-50%, 0) translate(${tx}%, ${ty}%) scale(${z})`,
          transition: "transform 1.4s cubic-bezier(0.65, 0, 0.35, 1)",
        }}
      >
        <img src={image.src} alt={`Compass · ${scene.title}`} className="absolute inset-0 h-full w-full select-none" draggable="false" />
        <div
          className="absolute rounded-lg border-2 transition-all duration-700 ease-in-out"
          style={{
            left: `${bx}%`,
            top: `${by}%`,
            width: `${bw}%`,
            height: `${bh}%`,
            borderColor: CORAL,
            opacity: shot.box ? 1 : 0,
            boxShadow: "0 0 0 4000px rgba(15, 30, 41, 0.35), 0 0 24px rgba(239, 142, 115, 0.6)",
          }}
        />
      </div>

      {shot.label && (
        <div key={shot.label} className="cs-fade-up absolute left-3 bottom-3 sm:left-5 sm:bottom-5 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold shadow-lg text-[#243238]">
          <CheckCircle2 size={16} style={{ color: TEAL }} />
          {shot.label}
        </div>
      )}

      {showToast && (
        <div className="cs-slide-in absolute right-3 top-[34%] sm:right-5 sm:top-[30%] w-60 sm:w-72 rounded-xl bg-white shadow-2xl border border-slate-200 p-3 flex gap-3 text-left text-[#243238]">
          <div className="h-8 w-8 rounded-full flex items-center justify-center shrink-0" style={{ background: "#fff0ea", color: CORAL }}>
            <Bell size={16} />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-semibold">Plazo por vencer</div>
            <div className="text-[11px] sm:text-xs text-slate-500">ACT-2052 · Seguimiento a Comercial Jormano vence en 2 h hábiles.</div>
          </div>
        </div>
      )}
    </div>
  );
}

const PAINS = ["Tareas que se olvidan", "Clientes sin respuesta", "¿Quién hace qué?"];

function IntroScene({ t }) {
  const solved = t >= 7.4;
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-[#0F1E29]">
      {!solved ? (
        <>
          <h3 className="cs-fade-up text-xl sm:text-4xl font-bold text-white mb-5 sm:mb-8">¿Tu equipo trabaja sin control?</h3>
          {t >= 2.4 && (
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {PAINS.map((pain, i) => (
                <span key={pain} className="cs-pop rounded-full border border-red-400/40 bg-red-500/10 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-base text-red-200" style={{ animationDelay: `${i * 1.2}s` }}>
                  {pain}
                </span>
              ))}
            </div>
          )}
        </>
      ) : (
        <>
          <div className="cs-pop"><CompassLogo size={30} bg={TEAL} className="mb-4" /></div>
          <h3 className="cs-fade-up font-serif text-3xl sm:text-5xl font-semibold text-white mb-2">Compass</h3>
          <p className="cs-fade-up text-sm sm:text-lg text-[#D1D8E0]" style={{ animationDelay: "0.3s" }}>Seguimiento de actividades para equipos de oficina y campo</p>
        </>
      )}
    </div>
  );
}

function OutroScene({ onReplay }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6" style={{ background: "#196f6b" }}>
      <div className="cs-pop"><CompassLogo size={26} bg={CORAL} className="mb-4" /></div>
      <h3 className="cs-fade-up font-serif text-xl sm:text-4xl font-semibold text-white mb-2" style={{ animationDelay: "0.3s" }}>
        Menos caos, más control.
      </h3>
      <p className="cs-fade-up text-xs sm:text-base text-white/80 mb-5" style={{ animationDelay: "0.6s" }}>
        Actividades, plazos, reportes y equipo en un solo lugar.
      </p>
      <div className="cs-fade-up flex flex-col sm:flex-row gap-2" style={{ animationDelay: "0.9s" }}>
        <a
          href={COMPASS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition"
          style={{ background: CORAL }}
        >
          Probar Compass <ExternalLink size={14} />
        </a>
        <button onClick={onReplay} className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition">
          <RotateCcw size={14} /> Repetir
        </button>
      </div>
    </div>
  );
}

export default function CompassShowcase() {
  const audioRef = useRef(null);
  const stageRef = useRef(null);
  const [scene, setScene] = useState(0);
  const [t, setT] = useState(0);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [audioFailed, setAudioFailed] = useState(false);
  const [stageAspect, setStageAspect] = useState(DESKTOP_ASPECT);

  const current = SCENES[scene];
  const isLast = scene === SCENES.length - 1;
  const tRef = useRef(0);
  useEffect(() => {
    tRef.current = t;
  }, [t]);

  const advance = useCallback(() => {
    if (scene >= SCENES.length - 1) {
      setPlaying(false);
      setT(SCENES[scene].duration);
      return;
    }
    setScene(scene + 1);
    setT(0);
  }, [scene]);

  // Mide el escenario para encuadrar las capturas (formato ancho en escritorio, 4:3 en móvil)
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      if (width && height) setStageAspect(width / height);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Reproduce o pausa la narración de la escena actual
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || audioFailed) return;
    if (playing) {
      audio.play().catch(() => setAudioFailed(true));
    } else {
      audio.pause();
    }
  }, [playing, scene, audioFailed]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.muted = muted;
  }, [muted]);

  // Respaldo sin audio: un reloj propio mantiene el ritmo de las escenas
  useEffect(() => {
    if (!audioFailed || !playing) return;
    let elapsed = tRef.current;
    const id = setInterval(() => {
      elapsed += 0.25;
      if (elapsed >= current.duration) advance();
      else setT(elapsed);
    }, 250);
    return () => clearInterval(id);
  }, [audioFailed, playing, current.duration, advance]);

  const start = (index) => {
    const audio = audioRef.current;
    if (audio && index === scene) audio.currentTime = 0;
    setScene(index);
    setT(0);
    setStarted(true);
    setPlaying(true);
  };

  const togglePlay = () => {
    if (playing) setPlaying(false);
    else if (!started || (isLast && t >= current.duration - 0.3)) start(started ? 0 : scene);
    else setPlaying(true);
  };

  const caption = lastAt(current.captions, t, ([at]) => at)[1];
  const progress = Math.min(1, t / current.duration);

  let stage;
  if (!started) {
    stage = <ScreenScene scene={SCENES[1]} t={0} stageAspect={stageAspect} />;
  } else if (current.image) {
    stage = <ScreenScene key={current.id} scene={current} t={t} stageAspect={stageAspect} />;
  } else if (current.id === "intro") {
    stage = <IntroScene key={current.id} t={t} />;
  } else {
    stage = <OutroScene key={current.id} onReplay={() => start(0)} />;
  }

  return (
    <div className="mx-auto w-full max-w-5xl">
      <audio
        ref={audioRef}
        src={current.audio}
        preload="auto"
        onTimeUpdate={(e) => setT(e.currentTarget.currentTime)}
        onEnded={advance}
        onError={() => setAudioFailed(true)}
      />

      <div className="rounded-2xl border border-white/10 bg-[#1a2e3d] shadow-[0_20px_60px_-15px_rgba(0,206,209,0.35)] overflow-hidden">
        {/* Barra de navegador */}
        <div className="flex items-center gap-2 px-3 py-2 bg-[#132431] border-b border-white/10">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 truncate rounded-md bg-white/5 px-3 py-1 text-[11px] text-[#D1D8E0]/70 text-left">
            productivity-sistem-register.vercel.app
          </div>
        </div>

        {/* Escenario */}
        <div ref={stageRef} className={`relative aspect-[4/3] sm:aspect-[1901/877] overflow-hidden ${started && !playing ? 'cs-paused' : ''}`}>
          {stage}

          {!started && (
            <button
              onClick={() => start(0)}
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#0F1E29]/55 backdrop-blur-[2px] text-white group"
              aria-label="Ver demo de Compass con audio"
            >
              <span className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-[#00CED1] text-[#0F1E29] shadow-lg transition-transform group-hover:scale-110">
                <Play size={32} className="ml-1" fill="currentColor" />
              </span>
              <span className="text-sm sm:text-base font-semibold">Ver demo con audio · 1 min</span>
            </button>
          )}
        </div>

        {/* Subtítulos */}
        <div className="min-h-[3.5rem] px-4 py-3 bg-[#0F1E29] text-center text-xs sm:text-sm text-[#D1D8E0]" aria-live="polite">
          {started ? caption : "Descubre en un minuto cómo Compass pone orden en el trabajo de tu equipo."}
        </div>

        {/* Controles */}
        <div className="flex items-center gap-3 px-3 py-2.5 bg-[#132431] border-t border-white/10">
          <button onClick={togglePlay} className="text-white hover:text-[#00CED1] transition" aria-label={playing ? "Pausar" : "Reproducir"}>
            {playing ? <Pause size={18} /> : <Play size={18} />}
          </button>
          <button onClick={() => setMuted((m) => !m)} className="text-white hover:text-[#00CED1] transition" aria-label={muted ? "Activar audio" : "Silenciar"}>
            {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
          <div className="flex flex-1 gap-1">
            {SCENES.map((s, i) => (
              <button key={s.id} onClick={() => start(i)} className="flex-1 py-1.5" aria-label={`Ir a: ${s.title}`} title={s.title}>
                <div className="h-1 rounded-full bg-white/15 overflow-hidden">
                  <div
                    className="h-full bg-[#00CED1] transition-[width] duration-300 ease-linear"
                    style={{ width: `${!started ? 0 : i < scene ? 100 : i === scene ? progress * 100 : 0}%` }}
                  />
                </div>
              </button>
            ))}
          </div>
          <span className="hidden sm:inline text-[11px] text-[#D1D8E0]/70 w-24 text-right truncate">{current.title}</span>
        </div>
      </div>
    </div>
  );
}
