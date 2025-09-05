import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

  const commands = [
    { id: 'home', name: 'Go to Home', description: 'Navigate to the home page', path: '/' },
    { id: 'about', name: 'About Me', description: 'Learn more about my background', path: '/about' },
    { id: 'projects', name: 'View Projects', description: 'Browse my portfolio projects', path: '/projects' },
    { id: 'contact', name: 'Contact', description: 'Get in touch with me', path: '/contact' },
    // Add your projects here for quick access
    { id: 'project1', name: 'Project One', description: 'A web application for task management', path: '/projects#project1' },
    { id: 'project2', name: 'Project Two', description: 'E-commerce platform with modern UI', path: '/projects#project2' },
  ];

  const filteredCommands = commands.filter(command =>
    command.name.toLowerCase().includes(search.toLowerCase()) ||
    command.description.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Toggle command palette with Cmd/Ctrl + K
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
        setSearch('');
        setSelectedIndex(0);
      }

      if (!isOpen) return;

      // Handle keyboard navigation
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev =>
            prev < filteredCommands.length - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => (prev > 0 ? prev - 1 : prev));
          break;
        case 'Enter':
          e.preventDefault();
          if (filteredCommands[selectedIndex]) {
            navigate(filteredCommands[selectedIndex].path);
            setIsOpen(false);
          }
          break;
        case 'Escape':
          setIsOpen(false);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands, navigate]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-6 md:py-20 lg:px-8">
      <div className="fixed inset-0 bg-gray-500/75" onClick={() => setIsOpen(false)} />

      <div className="relative mx-auto max-w-2xl transform rounded-xl bg-cmd-bg shadow-cmd ring-1 ring-border-color">
        <div className="divide-y divide-border-color">
          {/* Search input */}
          <div className="flex items-center px-4">
            <svg
              className="h-5 w-5 text-text-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              className="w-full bg-transparent px-4 py-4 text-text-primary placeholder-text-secondary focus:outline-none"
              placeholder="Search commands..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setSelectedIndex(0);
              }}
            />
            <kbd className="hidden sm:inline-block px-2 py-1 text-xs font-semibold text-text-secondary bg-search-hover rounded border border-border-color">
              ESC
            </kbd>
          </div>

          {/* Results */}
          <ul className="max-h-96 overflow-y-auto py-2">
            {filteredCommands.map((command, index) => (
              <li
                key={command.id}
                className={`px-4 py-3 cursor-pointer ${index === selectedIndex ? 'bg-search-hover' : ''}`}
                onClick={() => {
                  navigate(command.path);
                  setIsOpen(false);
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-text-primary font-medium">{command.name}</h3>
                    <p className="text-text-secondary text-sm">{command.description}</p>
                  </div>
                  <span className="text-text-secondary text-xs">
                    {index === selectedIndex && '↵'}
                  </span>
                </div>
              </li>
            ))}

            {filteredCommands.length === 0 && (
              <li className="px-4 py-8 text-center text-text-secondary">
                No results found.
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;