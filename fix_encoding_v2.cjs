const fs = require('fs');

const paths = [
    'c:\\Users\\LYKART06\\official owa\\src\\App.tsx',
    'c:\\Users\\LYKART06\\official owa\\src\\SidebarPages.tsx',
    'c:\\Users\\LYKART06\\official owa\\src\\SidebarPages2.tsx'
];

paths.forEach(path => {
    if (!fs.existsSync(path)) return;
    let content = fs.readFileSync(path, 'utf8');

    // Fix solid divider lines - replace the broken ones with a clean solid 64-char line
    // This catches both the garbled ones and the partially fixed ones with spaces
    content = content.replace(/\/\/ (â•\s?|═\s?){20,}/g, '// ════════════════════════════════════════════════════════════════');
    
    // Fix individual common encoding artifacts
    content = content.replace(/â•/g, '═');
    content = content.replace(/Â·/g, '·');
    content = content.replace(/â€“/g, '–');
    content = content.replace(/â€”/g, '—');
    content = content.replace(/â€œ/g, '“');
    content = content.replace(/â€ /g, '”');
    content = content.replace(/â€™/g, '’');
    content = content.replace(/â€/g, '”');
    
    // Fix characters like â– and â–ª
    content = content.replace(/â–ª/g, '▪');
    content = content.replace(/â–/g, '■');

    fs.writeFileSync(path, content, 'utf8');
    console.log(`Fixed encoding artifacts in ${path}`);
});
