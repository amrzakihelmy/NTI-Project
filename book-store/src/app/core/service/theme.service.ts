import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ThemeService {

 loadTheme(): string {

  const theme = localStorage.getItem('theme') || 'light';

  document.documentElement.setAttribute('data-bs-theme', theme);

  return theme;

}

  toggleTheme(): void {

    const html = document.documentElement;

    const currentTheme = html.getAttribute('data-bs-theme');

    if (currentTheme === 'dark') {

      html.setAttribute('data-bs-theme', 'light');

      localStorage.setItem('theme', 'light');

    } else {

      html.setAttribute('data-bs-theme', 'dark');

      localStorage.setItem('theme', 'dark');

    }

  }

}