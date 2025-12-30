# Planning Guide

A prestigious showcase website for the International Bingxin Literary Pen Conference, featuring Nobel Laureates and celebrating Chinese literary excellence in Singapore.

**Experience Qualities**:
1. **Dignified** - The experience should evoke the gravitas and prestige of a major international literary event hosting Nobel Prize winners
2. **Cultural** - Design elements should honor Chinese literary heritage while maintaining modern international sophistication
3. **Informative** - Clear presentation of awards, guests, schedule, and contact information for potential attendees and media

**Complexity Level**: Content Showcase (information-focused)
This is a multi-section informational website designed to present conference details, distinguished guests, awards, and contact information in an elegant, scrollable format suitable for a prestigious literary event.

## Essential Features

**Smooth Navigation**
- Functionality: Fixed header navigation with smooth scroll-to-section anchoring
- Purpose: Allow visitors to quickly access specific conference information
- Trigger: Click on navigation links or scroll naturally
- Progression: User clicks nav link → Smooth scroll animation → Arrives at target section
- Success criteria: All navigation links work, mobile menu toggles properly, scroll behavior is smooth

**Awards Showcase**
- Functionality: Display four major literary awards with descriptions in an organized grid
- Purpose: Highlight the prestige and scope of awards being presented
- Trigger: Scroll to awards section
- Progression: User scrolls → Awards appear in grid → Hover reveals subtle interactions
- Success criteria: All four awards visible, descriptions clear, layout responsive on mobile

**Distinguished Guests Section**
- Functionality: Prominent display of Nobel Laureates with detailed guest lists
- Purpose: Showcase the caliber of attendees and build credibility
- Trigger: Scroll to guests section
- Progression: User scrolls → Nobel Laureates featured prominently → Additional distinguished guests organized below
- Success criteria: Clear hierarchy between Nobel Laureates and other guests, all information legible

**Event Schedule Display**
- Functionality: List major events with locations and timing
- Purpose: Inform potential attendees of conference activities
- Trigger: Scroll to schedule section
- Progression: User scrolls → Events displayed in chronological list → Location details visible
- Success criteria: Events clearly organized, venues identifiable, responsive layout

**WeChat Contact Integration**
- Functionality: Display WeChat IDs with click-to-copy functionality
- Purpose: Enable easy registration and inquiry for Chinese-speaking audience
- Trigger: Click on WeChat contact cards
- Progression: User clicks card → WeChat ID copied to clipboard → Confirmation alert appears
- Success criteria: Copy function works reliably, IDs are clearly displayed and accurate

**Language Toggle**
- Functionality: Toggle between English and Chinese (Simplified) with persistent language preference
- Purpose: Serve both English and Chinese-speaking audiences with seamless bilingual experience
- Trigger: Click language toggle button in navigation
- Progression: User clicks toggle → All text switches to selected language → Preference saved for future visits
- Success criteria: All content translates instantly, language preference persists across sessions, Chinese fonts display correctly

## Edge Case Handling

- **Mobile Navigation**: Hamburger menu with overlay for small screens prevents navigation crowding
- **Copy Failure**: Fallback alert notification if clipboard access fails in browser
- **Long Content**: Responsive grid layouts collapse to single column on mobile for readability
- **Scroll State**: Navigation background transitions based on scroll position for better visibility
- **Empty Scroll**: Smooth scroll polyfill ensures consistent behavior across browsers

## Design Direction

The design should evoke prestigious academic and cultural refinement with Chinese literary heritage influences. Think elegant calligraphy exhibitions, museum showcases, and international cultural forums—sophisticated, timeless, and dignified with subtle oriental aesthetic touches.

## Color Selection

A refined palette inspired by traditional Chinese aesthetics combined with modern sophistication.

- **Primary Color**: Deep Chinese Red (oklch(0.38 0.15 25)) - Conveys cultural heritage, prestige, and literary passion; used for key accents and calls-to-action
- **Secondary Colors**: 
  - Warm Rice Paper (oklch(0.97 0.01 85)) - Main background creating a cultured, paper-like canvas
  - Muted Gold (oklch(0.75 0.12 85)) - Accent for awards and special distinctions
  - Ink Black (oklch(0.25 0 0)) - Primary text suggesting traditional ink calligraphy
  - Stone Gray (oklch(0.22 0 0)) - Dark section backgrounds for contrast and rhythm
- **Accent Color**: Bright Red Highlight (oklch(0.45 0.18 25)) - For interactive elements and emphasis
- **Foreground/Background Pairings**: 
  - Rice Paper Background (oklch(0.97 0.01 85)): Ink Black text (oklch(0.25 0 0)) - Ratio 11.2:1 ✓
  - Chinese Red Background (oklch(0.38 0.15 25)): White text (oklch(1 0 0)) - Ratio 7.8:1 ✓
  - Stone Gray Background (oklch(0.22 0 0)): White text (oklch(1 0 0)) - Ratio 14.1:1 ✓
  - White Cards (oklch(1 0 0)): Ink Black text (oklch(0.25 0 0)) - Ratio 15.8:1 ✓

## Font Selection

Typography should balance classical literary elegance with modern readability, suitable for both Chinese and English content.

- **Typographic Hierarchy**: 
  - H1 (Hero Title): Playfair Display Bold/3.5rem (56px)/tight leading - Commanding presence for main conference title
  - H2 (Section Headers): Playfair Display Bold/2.25rem (36px)/snug leading - Clear section demarcation
  - H3 (Subsections): Inter SemiBold/1.5rem (24px)/normal leading - Modern readability for content headers
  - Body Text: Inter Regular/1rem (16px)/relaxed leading (1.6) - Comfortable reading for descriptions
  - Small Print: Inter Regular/0.875rem (14px)/normal leading - Details and meta information
  - Accent Text: Inter Medium/uppercase/wide tracking - For labels and emphasis

## Animations

Animations should be subtle and purposeful, enhancing the refined, scholarly atmosphere without distraction.

- **Scroll-triggered Fade**: Gentle fade-in on section elements as they enter viewport for progressive revelation
- **Navigation Transform**: Smooth background transition on scroll for improved header visibility
- **Hover Elevations**: Subtle shadow depth increase on award cards and buttons suggesting interactivity
- **Mobile Menu**: Smooth slide-down animation for mobile navigation overlay
- **Micro-interactions**: Gentle scale transform on award icons on hover adding moments of delight

## Component Selection

- **Components**: 
  - Button: For primary CTAs with variant styles (solid for WeChat contact, outline for secondary actions)
  - Card: For awards display and guest information with custom border styling
  - Alert: For copy-to-clipboard confirmation feedback
  - Navigation custom component with scroll detection
- **Customizations**: 
  - Custom section components (Hero, Awards, Guests, etc.) with tailored layouts
  - Fixed navigation header with transparency transitions
  - Decorative SVG elements for cultural ambiance
  - Grid layouts with asymmetric emphasis for Nobel Laureates
- **States**: 
  - Buttons: Default with shadow, hover with deeper color and shadow lift, active with slight scale
  - Cards: Default with subtle border, hover with shadow elevation and slight transform
  - Navigation: Transparent default, solid white with shadow when scrolled
  - Mobile menu: Hidden default, overlay with backdrop when open
- **Icon Selection**: 
  - Feather: Brand identity and cultural elegance
  - Calendar/MapPin: Event logistics
  - Award: Recognition and achievements
  - Users/Globe/BookOpen: Organizational categories
  - MessageCircle: Communication channels
  - ChevronRight: List indicators
  - Menu/X: Mobile navigation
- **Spacing**: 
  - Section padding: py-20 (5rem) for clear visual rhythm
  - Container: mx-auto with px-6 for consistent content width
  - Card gaps: gap-6 to gap-8 depending on content density
  - Element spacing: space-y-4 to space-y-6 for vertical stacking
- **Mobile**: 
  - Hamburger menu replaces horizontal navigation below 768px
  - Grid columns collapse: 4 columns → 2 columns → 1 column progressively
  - Hero text sizing reduces: text-7xl → text-5xl
  - Flexbox directions switch: flex-row → flex-col for event listings and CTAs
  - Touch-friendly sizing maintained with adequate padding on interactive elements
