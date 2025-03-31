'use client';

import Link from 'next/link';

export default function FooterComponent() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    {/* Footer Logo or Branding */}
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold">Your Company</h2>
                        <p className="text-sm text-gray-400 mt-1">Empowering businesses with technology</p>
                    </div>

                    {/* Footer Navigation Links */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                        {[
                            { name: 'Solutions', href: '#' },
                            { name: 'Marketing', href: '#' },
                            { name: 'Analytics', href: '#' },
                            { name: 'Automation', href: '#' },
                            { name: 'Commerce', href: '#' },
                            { name: 'Insights', href: '#' },
                        ].map((link) => (
                            <Link key={link.name} href={link.href} className="text-gray-300 hover:text-white transition">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
