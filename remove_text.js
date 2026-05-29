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
            
            // Remove specific block from Navbar.jsx
            newContent = newContent.replace(
                /<span className="text-xs md:text-sm text-gray-600 font-medium">\s*Real Estate and Builders\s*<\/span>/g,
                ''
            );
            
            // siteData.js type
            newContent = newContent.replace(
                /type: "Real Estate and Builders Company"/g,
                'type: "Developers Company"'
            );

            // "AL Madina Real Estate & Developer"
            newContent = newContent.replace(/AL Madina Real Estate & Developer/gi, 'Al-Madina Developers');

            // General phrases
            newContent = newContent.replace(/Real Estate and Builders/gi, 'Developers');
            newContent = newContent.replace(/Real Estate & Builders/gi, 'Developers');

            // "PREMIUM REAL ESTATE" -> "PREMIUM DEVELOPERS" or "PREMIUM PROPERTIES" in Hero.jsx
            newContent = newContent.replace(/PREMIUM REAL ESTATE/gi, 'PREMIUM PROPERTIES');

            // "Our Real Estate Services" -> "Our Services"
            newContent = newContent.replace(/Our Real Estate Services/gi, 'Our Services');

            // "Talk to Our Real Estate Consultants" -> "Talk to Our Property Consultants"
            newContent = newContent.replace(/Talk to Our Real Estate Consultants/gi, 'Talk to Our Property Consultants');

            // "real estate goals" -> "property goals"
            newContent = newContent.replace(/real estate goals/gi, 'property goals');
            
            // "real estate guidance" -> "property guidance"
            newContent = newContent.replace(/real estate guidance/gi, 'property guidance');

            // "real estate market" -> "property market"
            newContent = newContent.replace(/real estate market/gi, 'property market');
            
            // "Real Estate Consultant" -> "Property Consultant"
            newContent = newContent.replace(/Real Estate Consultant/gi, 'Property Consultant');

            // "Real Estate" when it's standalone - remove it if it's left over from "Al-Madinah Real Estate" replacements
            newContent = newContent.replace(/About <span className="text-gradient">Al-Madinah<\/span> <br className="hidden md:block" \/> Developers/g, 'About <span className="text-gradient">Al-Madina Developers</span>');

            if (newContent !== content) {
                fs.writeFileSync(file, newContent, 'utf8');
                console.log(`Updated ${file}`);
            }
        }
    });
});
