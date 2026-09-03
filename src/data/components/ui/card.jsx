const SectionHeader = ({ title, subtitle, isDark = false }) => (
  <div className="text-center max-w-3xl mx-auto mb-16">
    <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-[#0F1E29]'}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-lg ${isDark ? 'text-[#D1D8E0]' : 'text-slate-600'}`}>
        {subtitle}
      </p>
    )}
    <div className="w-20 h-1 bg-[#00CED1] mx-auto mt-6 rounded-full"></div>
  </div>
);