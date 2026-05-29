import os
import re

directories = ['app', 'components', 'data']

for d in directories:
    for root, dirs, files in os.walk(d):
        for file in files:
            if file.endswith('.js') or file.endswith('.jsx'):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                new_content = content
                
                # Special cases first
                new_content = new_content.replace(
                    'About <span className="text-gradient">Al-Madinah</span> <br className="hidden md:block" /> Real Estate & Builders',
                    'About <span className="text-gradient">Al-Madina Developers</span>'
                )
                new_content = new_content.replace(
                    '<span className="font-serif text-xl font-bold text-white leading-tight">\n                  Al-Madinah\n                </span>\n                <span className="text-xs text-gold font-medium uppercase tracking-wider">\n                  Real Estate\n                </span>',
                    '<span className="font-serif text-xl font-bold text-white leading-tight">\n                  Al-Madina\n                </span>\n                <span className="text-xs text-gold font-medium uppercase tracking-wider">\n                  Developers\n                </span>'
                )
                new_content = new_content.replace(
                    '<span className="font-serif text-2xl font-bold text-navy leading-tight tracking-wide">\n              Al-Madinah\n            </span>\n            <span className="text-[10px] text-gold font-bold uppercase tracking-[0.2em] -mt-1">\n              Real Estate\n            </span>',
                    '<span className="font-serif text-2xl font-bold text-navy leading-tight tracking-wide">\n              Al-Madina\n            </span>\n            <span className="text-[10px] text-gold font-bold uppercase tracking-[0.2em] -mt-1">\n              Developers\n            </span>'
                )
                new_content = new_content.replace(
                    '<span className="font-serif text-2xl font-bold text-white leading-tight tracking-wide">\n                  Al-Madinah\n                </span>\n                <span className="text-xs text-gold font-medium uppercase tracking-[0.2em]">\n                  Real Estate\n                </span>',
                    '<span className="font-serif text-2xl font-bold text-white leading-tight tracking-wide">\n                  Al-Madina\n                </span>\n                <span className="text-xs text-gold font-medium uppercase tracking-[0.2em]">\n                  Developers\n                </span>'
                )
                
                # General string replacements
                replacements = [
                    ('Al-Madinah Real Estate and Builders', 'Al-Madina Developers'),
                    ('Al-Madinah Real Estate & Builders', 'Al-Madina Developers'),
                    ('Al-Madinah Real Estate', 'Al-Madina Developers'),
                    ('Al Madinah Real Estate', 'Al-Madina Developers'),
                    ('Al Madina Estate', 'Al-Madina Developers'),
                    ('Al-Madina Estate', 'Al-Madina Developers'),
                    ('Al-Madinah', 'Al-Madina Developers'),
                    ('Al Madinah', 'Al-Madina Developers')
                ]
                
                for old, new in replacements:
                    # avoid touching image paths or component names (though component names are usually one word, paths are lower case, Al-Madinah is capitalized)
                    new_content = new_content.replace(old, new)
                
                # Fix up any accidental double words or issues
                new_content = new_content.replace('Al-Madina Developers Developers', 'Al-Madina Developers')
                new_content = new_content.replace('Al-Madina Developers Real Estate', 'Al-Madina Developers')
                
                if new_content != content:
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Updated {path}")
