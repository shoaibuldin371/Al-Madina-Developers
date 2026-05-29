const fs = require('fs');
const path = require('path');

const directories = ['app', 'components', 'data'];

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            results.push(file);
        }
    });
    return results;
}

directories.forEach(d => {
    if (!fs.existsSync(d)) return;
    const files = walk(d);
    files.forEach(file => {
        if (file.endsWith('.js') || file.endsWith('.jsx')) {
            let content = fs.readFileSync(file, 'utf8');
            let newContent = content;
            
            // Special cases
            newContent = newContent.replace(
                /About <span className="text-gradient">Al-Madinah<\/span> <br className="hidden md:block" \/> Real Estate & Builders/g,
                'About <span className="text-gradient">Al-Madina Developers</span>'
            );
            newContent = newContent.replace(
                /<span className="font-serif text-xl font-bold text-white leading-tight">\s*Al-Madinah\s*<\/span>\s*<span className="text-xs text-gold font-medium uppercase tracking-wider">\s*Real Estate\s*<\/span>/g,
                '<span className="font-serif text-xl font-bold text-white leading-tight">\n                  Al-Madina\n                </span>\n                <span className="text-xs text-gold font-medium uppercase tracking-wider">\n                  Developers\n                </span>'
            );
            newContent = newContent.replace(
                /<span className="font-serif text-2xl font-bold text-navy leading-tight tracking-wide">\s*Al-Madinah\s*<\/span>\s*<span className="text-\[10px\] text-gold font-bold uppercase tracking-\[0\.2em\] -mt-1">\s*Real Estate\s*<\/span>/g,
                '<span className="font-serif text-2xl font-bold text-navy leading-tight tracking-wide">\n              Al-Madina\n            </span>\n            <span className="text-[10px] text-gold font-bold uppercase tracking-[0.2em] -mt-1">\n              Developers\n            </span>'
            );
            newContent = newContent.replace(
                /<span className="font-serif text-2xl font-bold text-white leading-tight tracking-wide">\s*Al-Madinah\s*<\/span>\s*<span className="text-xs text-gold font-medium uppercase tracking-\[0\.2em\]">\s*Real Estate\s*<\/span>/g,
                '<span className="font-serif text-2xl font-bold text-white leading-tight tracking-wide">\n                  Al-Madina\n                </span>\n                <span className="text-xs text-gold font-medium uppercase tracking-[0.2em]">\n                  Developers\n                </span>'
            );
            
            // General string replacements
            const replacements = [
                [/Al-Madinah Real Estate and Builders/g, 'Al-Madina Developers'],
                [/Al-Madinah Real Estate & Builders/g, 'Al-Madina Developers'],
                [/Al-Madinah Real Estate/g, 'Al-Madina Developers'],
                [/Al Madinah Real Estate/g, 'Al-Madina Developers'],
                [/Al Madina Estate/g, 'Al-Madina Developers'],
                [/Al-Madina Estate/g, 'Al-Madina Developers'],
                [/Al-Madinah/g, 'Al-Madina Developers'],
                [/Al Madinah/g, 'Al-Madina Developers']
            ];
            
            replacements.forEach(([oldReg, newStr]) => {
                newContent = newContent.replace(oldReg, newStr);
            });
            
            // Fix up any accidental double words or issues
            newContent = newContent.replace(/Al-Madina Developers Developers/g, 'Al-Madina Developers');
            newContent = newContent.replace(/Al-Madina Developers Real Estate/g, 'Al-Madina Developers');
            
            if (newContent !== content) {
                fs.writeFileSync(file, newContent, 'utf8');
                console.log(`Updated ${file}`);
            }
        }
    });
});
