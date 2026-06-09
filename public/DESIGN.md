---
name: Artisanal Neapolitan
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#20201f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e5e2e1'
  on-surface-variant: '#e3beb8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#aa8984'
  outline-variant: '#5a403c'
  surface-tint: '#ffb4a8'
  primary: '#ffb4a8'
  on-primary: '#690000'
  primary-container: '#8b0000'
  on-primary-container: '#ff907f'
  inverse-primary: '#b52619'
  secondary: '#ffd250'
  on-secondary: '#3d2e00'
  secondary-container: '#e5b501'
  on-secondary-container: '#5d4800'
  tertiary: '#c8c8b0'
  on-tertiary: '#303221'
  tertiary-container: '#424432'
  on-tertiary-container: '#b0b19a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#ffb4a8'
  on-primary-fixed: '#410000'
  on-primary-fixed-variant: '#920703'
  secondary-fixed: '#ffe08f'
  secondary-fixed-dim: '#f1c019'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#584400'
  tertiary-fixed: '#e4e4cc'
  tertiary-fixed-dim: '#c8c8b0'
  on-tertiary-fixed: '#1b1d0e'
  on-tertiary-fixed-variant: '#474836'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
typography:
  headline-xl:
    fontFamily: EB Garamond
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: EB Garamond
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
  headline-md:
    fontFamily: EB Garamond
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style
The brand personality is rooted in tradition, warmth, and culinary excellence. It evokes the feeling of a sun-drenched Italian kitchen—authentic and artisanal, yet refined by modern professional standards. The design system targets a discerning audience that values quality ingredients and the heritage of wood-fired pizza.

The style is **Modern Tactile**. It blends high-contrast typography with organic textures and depth. In this dark-mode iteration, the interface feels like an intimate evening in a dimly lit enoteca. It utilizes soft shadows and subtle background textures (such as charred wood grain or fine flour dust) to create a sense of place. High-quality food photography is the hero of the interface, glowing against the dark canvas.

## Colors
The palette is inspired by the traditional ingredients and the evening ambiance of a Neapolitan pizzeria.
- **Primary (Deep Red):** Represents San Marzano tomatoes and classic Italian branding. In this dark theme, it acts as a rich, sophisticated accent for branding and high-level navigation.
- **Accent (Gold/Amber):** Mimics the glow of wood-fire embers. Reserved strictly for calls-to-action (CTAs), "Add to Cart" buttons, and promotional highlights to ensure they stand out against the dark canvas.
- **Background (Charcoal/Ink):** A deep, neutral base that provides a premium feel, making the red and gold accents feel more luminous.
- **Text (Bone/Cream):** Replaces the previous bone background as the primary text color, providing high-contrast legibility without the harshness of pure white.

## Typography
The typography system uses a classic pairing of a refined Serif for headings and a functional Sans-Serif for utility.

- **EB Garamond** is used for all headlines. It brings an authoritative, literary, and historical Italian feel to the brand. Use medium and semi-bold weights to maintain presence against photography.
- **Work Sans** is used for body copy, labels, and prices. It provides a grounded, professional contrast to the serif headings, ensuring that menus and nutritional information remain easy to scan and read on all devices.
- **Hierarchy:** Use larger headline scales for product titles and section headers. Smaller, uppercase labels should be used for categories (e.g., "VEGETARIAN", "SPICY") to add a disciplined structure to the artisanal aesthetic.

## Layout & Spacing
The layout follows a **Fixed Grid** model on desktop to mimic the centered, curated feel of a physical menu. On mobile, it transitions to a fluid single-column layout.

- **Desktop:** A 12-column grid with a maximum container width of 1200px. Gutters are generous (24px) to allow the "air" required for a premium feel.
- **Mobile:** A 4-column fluid grid with 16px side margins. 
- **Rhythm:** Use a consistent 8px baseline. Spacing between menu items should be large (32px+) to prevent the interface from feeling cluttered. Food categories should be separated by significant vertical whitespace (80px) to signify a change in the dining "course."

## Elevation & Depth
Depth in the design system is achieved through a combination of **Tonal Layers** and **Luminous Shadows**.

1.  **Surfaces:** The primary background is the Neutral Charcoal color. Elevated "cards" for menu items use slightly lighter shades of the neutral palette or a subtle "frosted" glass effect (Backdrop-blur) when appearing over food photography.
2.  **Shadows:** Use extremely soft, diffused shadows. In dark mode, these are less about casting "light" and more about creating a subtle outer glow or a deeper black "negative shadow" to lift elements off the page.
3.  **Overlays:** Modal windows and cart drawers must use a high-density backdrop blur (20px+) to maintain focus on the content while keeping the warm colors of the underlying photography visible.

## Shapes
The shape language is **Rounded**, reflecting the organic nature of hand-stretched pizza dough. 

- **Cards and Buttons:** Use the standard 0.5rem (8px) radius. This softens the interface without making it feel overly "bubbly" or childish.
- **Product Images:** Food photography should either be fully circular (representing the pizza itself) or have a larger 1.5rem (24px) radius to emphasize a premium, soft-touch presentation.
- **Inputs:** Text fields should maintain the standard 0.5rem radius to ensure a professional, clean look.

## Components
- **Buttons:** The Primary CTA ("Add to Cart") uses the Gold/Amber background with Charcoal Grey text for maximum visibility. Secondary buttons (e.g., "Customize") should be Deep Red outlines with serif text.
- **Menu Cards:** Cards should have a subtle 1px border in a slightly lighter neutral tone. The price should be positioned in the top right in a bolded Work Sans font.
- **Chips/Tags:** Used for dietary requirements (e.g., GF, Vegan). These should be small, Deep Red outlines with `label-sm` typography.
- **Input Fields:** Use a subtle inset shadow to give a "pressed into paper" feel, with the label sitting just above the field in `label-md` uppercase.
- **Navigation:** The top navigation should be sticky, utilizing a semi-transparent dark background with a heavy backdrop-blur to ensure legibility as the user scrolls.