import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { TranslateService } from '@ngx-translate/core';

const LANG_STORAGE_KEY = 'accent-lang';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(
    public theme: ThemeService,
    public translate: TranslateService
  ) {}

  isMobileMenuOpen = false;
  isMobileSolutionsOpen = false;
  isMobileClientOpen = false;

  get currentLang(): string {
    return (this.translate.currentLang || this.translate.defaultLang || 'fr').toUpperCase().slice(0, 2);
  }

  switchLanguage() {
    const next = this.translate.currentLang === 'fr' ? 'en' : 'fr';
    this.translate.use(next);
    localStorage.setItem(LANG_STORAGE_KEY, next);
    document.documentElement.lang = next;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (!this.isMobileMenuOpen) {
      this.isMobileSolutionsOpen = false;
      this.isMobileClientOpen = false;
    }
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    this.isMobileSolutionsOpen = false;
    this.isMobileClientOpen = false;
  }

  toggleMobileSolutions() {
    this.isMobileSolutionsOpen = !this.isMobileSolutionsOpen;
  }

  toggleMobileClient() {
    this.isMobileClientOpen = !this.isMobileClientOpen;
  }
}
