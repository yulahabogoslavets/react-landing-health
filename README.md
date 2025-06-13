# React Landing Health

A modern, accessible, and responsive landing page for a mental health or wellness service, built with React and Tailwind CSS.

---

## Features

- **Responsive Design:** Looks great on all devices.
- **Dark/Light Mode:** User can toggle theme; respects system preference and saves choice to localStorage.
- **Accessible Components:** All interactive elements (forms, navigation, tabs, carousels) are keyboard and screen reader friendly.
- **Animated Hero Section:** Eye-catching gradient backgrounds and imagery.
- **Services Tabs:** Accessible tab navigation with keyboard support.
- **Testimonials Carousel:** Accessible slider with keyboard navigation and live region for screen readers.
- **Contact Form:** Validated, accessible form with floating labels and error messages.
- **SEO & Semantic HTML:** Proper use of headings, lists, address, and ARIA attributes.
- **Reusable Components:** Button, Link, Tab, Headline, etc.
- **Custom Theme Context:** Handles theme switching and persistence.

---

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to view the app.

---

## Project Structure

```
src/
  components/
    shared/         # Reusable UI components (Button, Link, Headline, etc.)
    Hero.tsx
    About.tsx
    Services.tsx
    Testimonials.tsx
    Contact.tsx
    Footer.tsx
    Navbar.tsx
  context/
    ThemeContext.tsx
  utils/
    testimonials-data.ts
    services-data.ts
  assets/
    logo.svg
    fruits.jpg
  App.tsx
  main.tsx
```

---

## Customization

- **Navigation:** Edit `navItems` in `Navbar.tsx` to change menu links.
- **Social Links:** Edit `socialLinks` in `Footer.tsx`.

---

## Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run preview` – Preview production build

---

## Credits

- [Lucide Icons](https://lucide.dev/) for iconography
- [Splide](https://splidejs.com/) for carousel/slider
