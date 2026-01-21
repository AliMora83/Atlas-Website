# Atlas Website
## Product Document & Clone Specification

**Version:** 1.0  
**Last Updated:** January 6, 2026  
**Status:** Product Specification for Development

---

## Table of Contents

1. [Executive Overview](#executive-overview)
2. [Website Architecture](#website-architecture)
3. [Page Structure & Layouts](#page-structure--layouts)
4. [Feature Specifications](#feature-specifications)
5. [Forms & Data Collection](#forms--data-collection)
6. [Design System](#design-system)
7. [Technical Stack](#technical-stack)
8. [Navigation Flow](#navigation-flow)
9. [Content Sections Detail](#content-sections-detail)
10. [Integration Requirements](#integration-requirements)

---

## Executive Overview

### Purpose
The Atlas website serves as the central hub for:
- Conference information and details
- Attendee registration and ticket purchasing
- Speaker and session showcase
- Venue and logistics information
- Call for proposals submission
- Sponsorship opportunities
- News and updates portal

### Key Statistics
- **Conference Dates:** June 3-5, 2026
- **Location:** Accra, Ghana
- **Edition:** 19th Annual Atlas Conference Conference
- **Target Audience:** Educators, EdTech innovators, decision-makers, policy leaders
- **Expected Visitors:** 5,000+ annual conference attendees + website visitors

### Core Objectives
1. Drive conference registrations and ticket sales
2. Collect speaker/proposal submissions
3. Showcase conference agenda and speakers
4. Provide attendee information and resources
5. Secure sponsorships and partnerships
6. Build community engagement

---

## Website Architecture

### Site Structure Hierarchy

```
Homepage (index.php)
├── About Conference
│   ├── Overview
│   ├── Theme & Objectives
│   └── Previous Editions
├── Program & Agenda
│   ├── Schedule Grid
│   ├── Session Details
│   ├── Speakers
│   └── Tracks/Themes
├── Call for Proposals
│   ├── Guidelines
│   ├── Submission Form
│   └── Timeline
├── Registration
│   ├── Ticket Types & Pricing
│   ├── Registration Form
│   ├── Payment Gateway
│   └── Confirmation
├── Venue & Logistics
│   ├── Location Details
│   ├── Map & Directions
│   ├── Accommodation
│   └── Travel Information
├── Sponsorship
│   ├── Sponsorship Levels
│   ├── Prospectus
│   └── Sponsor Portal
├── News & Updates
│   ├── News Portal
│   ├── Blog
│   └── Media Resources
└── Contact & Support
    ├── Contact Form
    ├── FAQ
    └── Help Center
```

### Database Tables Required
- Users (Attendees/Registrants)
- Registrations/Tickets
- Speakers
- Sessions/Proposals
- Sponsors
- News Articles
- Contact Inquiries
- Payment Records

---

## Page Structure & Layouts

### 1. Homepage (Landing Page)

**Primary Purpose:** Hook visitors, showcase conference value, drive key actions

**Key Sections (Top to Bottom):**

#### a) Navigation Bar
- **Position:** Sticky (remains visible on scroll)
- **Logo:** Atlas Conference Conference 2026 Logo (300x80px)
- **Menu Items:** Home, About, Program, Speakers, Register, Call for Proposals, Sponsors, News, Contact
- **CTA Button:** "Register Now" (prominent, contrasting color)
- **Mobile Menu:** Hamburger menu for responsive view

#### b) Hero Section
- **Background:** Full-width image or video (1920x600px)
  - *Dummy:* "Conference Hall Banner Image - replace with actual venue/attendee photo"
- **Overlay:** Semi-transparent dark overlay (40-50% opacity)
- **Content:**
  - Main Headline: "19th Atlas Conference Conference 2026"
  - Subheadline: "Shaping the Future of Digital Education Across Africa"
  - Conference Dates: "June 3-5, 2026 | Accra, Ghana"
  - Primary CTA: "Register Now" button (color: brand primary)
  - Secondary CTA: "View Agenda" button (outline style)

#### c) Conference Key Facts Section
- **Layout:** 4-column grid (responsive 2x2 on tablet, 1 column on mobile)
- **Cards Display:**
  1. Event Date & Location
     - Icon: Calendar
     - "June 3-5, 2026"
     - "Accra, Ghana"
  2. Expected Attendees
     - Icon: Users
     - "5,000+ Attendees"
  3. International Speakers
     - Icon: Microphone
     - "150+ Speakers"
  4. Sessions & Workshops
     - Icon: Presentation
     - "200+ Sessions"

#### d) Conference Theme Section
- **Layout:** Text block with image (text-left, image-right; alternates on mobile)
- **Headline:** "Theme: [Conference Theme]"
- **Description:** 2-3 paragraph description of conference theme
- **Image:** Relevant conference theme image (600x400px)
  - *Dummy:* "Modern Education Technology Concept Image"
- **CTA Button:** "Learn More About Theme"

#### e) Featured Speakers Section
- **Layout:** Carousel/Slider (auto-rotating, clickable thumbnails)
- **Per Card:**
  - Speaker Image (200x200px, circular or rounded)
    - *Dummy:* "Speaker Photo Placeholder"
  - Name
  - Title/Organization
  - Bio (2-3 lines)
  - Social Links (Twitter, LinkedIn)
- **Number of Featured:** 4-6 speakers rotating
- **Navigation:** Previous/Next arrows + Dots

#### f) Program Highlights Section
- **Layout:** 3-column grid with cards
- **Per Card:**
  - Category Label/Badge
  - Title
  - Description (2-3 lines)
  - Icon or small image
  - "View Full Agenda" link
- **Cards Displayed:**
  1. Keynote Sessions
  2. Parallel Tracks
  3. Workshops & Networking
  4. Pre-Conference Events

#### g) Registration & Pricing Section
- **Layout:** 3-column ticket type cards (center-aligned, highest tier highlighted)
- **Per Card:**
  - Ticket Type Name
  - Price (€ symbol)
  - Features list (5-7 items with checkmarks)
  - "Select Ticket" CTA button
  - "*Limited spaces available" or "*African subsidy available"
- **Ticket Types:**
  1. Early Bird (with discount badge)
  2. Standard
  3. Engagement Pass (premium/highlighted)

#### h) Call for Proposals Banner
- **Layout:** Full-width banner with alternating background color
- **Content:**
  - Eye-catching headline: "Call for Proposals Now Open!"
  - Submission deadline prominently displayed
  - Short description
  - "Submit Your Proposal" CTA button
  - Secondary text: "Share your innovations and insights"

#### i) Sponsors Section
- **Layout:** Horizontal scroll or grid of sponsor logos
- **Levels Shown:** Gold, Silver, Bronze sponsor logos
- **Logo Size:** 150x80px per sponsor
  - *Dummy:* "Sponsor Logo Placeholder"
- **CTA:** "Become a Sponsor" link

#### j) Testimonials/Attendee Feedback
- **Layout:** Carousel (3 visible, scrollable)
- **Per Card:**
  - Attendee quote (2-3 lines)
  - Attendee name
  - Attendee title/organization
  - Attendee photo (100x100px, circular)
    - *Dummy:* "Attendee Photo Placeholder"
  - Star rating (5 stars)

#### k) Venue Snapshot Section
- **Layout:** 2-column (map on right, text on left)
- **Text Content:**
  - Venue name and address
  - Quick facts (capacity, accessibility, nearby hotels)
  - "View Full Venue Info" link
- **Map:** Embedded Google Map or static map image (600x400px)
  - *Dummy:* "Accra Venue Location Map"

#### l) Newsletter Signup Section
- **Layout:** Full-width banner
- **Content:**
  - Headline: "Stay Updated with Conference News"
  - Email input field
  - "Subscribe" button
  - Privacy note

#### m) Footer
- **Layout:** 4-column footer grid + bottom copyright bar
- **Columns:**
  1. **About**
     - Company/Conference description
     - Social media icons (5-6 platforms)
  2. **Quick Links**
     - Home, About, Program, Speakers, Register
     - News, Sponsors, Contact
  3. **Contact Info**
     - Email address
     - Phone number
     - Physical address
     - Office hours
  4. **Resources**
     - FAQ
     - Privacy Policy
     - Terms of Use
     - General Conditions
- **Bottom Bar:**
  - Copyright notice
  - Links to policies

---

### 2. About Conference Page

**Purpose:** Provide detailed conference history, objectives, and context

**Sections:**

#### a) Page Header
- Breadcrumb navigation
- Page title: "About Atlas Conference Conference"
- Background image banner

#### b) Conference Overview
- Detailed description (500-800 words)
- Key objectives (5-7 bullet points)
- Conference vision and mission

#### c) Conference History
- **Layout:** Timeline or tabbed interface
- **19 Years of Atlas Conference:**
  - Year markers
  - Number of attendees
  - Location/Theme
  - Key highlights
- *Dummy:* "Previous conference statistics and photos"

#### d) Host Country/City Spotlight
- Image of venue city (Accra)
  - *Dummy:* "Accra City Skyline"
- Description of location
- Cultural significance
- What to expect

#### e) Partners & Organizers
- Ministry of Education logo/info
- ICWE GmbH logo/info
- Co-organizing partners

#### f) By the Numbers
- 4-column stat cards:
  1. Years Running
  2. Total Past Attendees
  3. Countries Represented
  4. Sessions/Speakers Hosted

---

### 3. Program & Agenda Page

**Purpose:** Display conference schedule, sessions, and speakers

**Key Features:**

#### a) Schedule View Toggle
- **Two view options:**
  1. Calendar/Grid View (by day and time)
  2. List View (all sessions in list format)

#### b) Filter & Search
- **Filters:**
  - By Day (June 3, 4, 5)
  - By Track/Theme (5-7 different tracks)
  - By Type (Keynote, Workshop, Panel, etc.)
  - By Room/Venue

#### c) Schedule Grid (Calendar View)
- **Layout:** Responsive table/grid
  - Rows: Time slots (30-min or 1-hour intervals)
  - Columns: Tracks/Rooms (4-6 parallel tracks)
- **Per Cell:** 
  - Session title
  - Speaker name(s)
  - Room/Track label
  - Clickable for details

#### d) Session Detail Modal/Page
When clicking a session:
- Session title
- Date and time
- Location/Room
- Description (200-400 words)
- Speaker(s) info with photos/bios
- Session type badge
- Related sessions links
- Add to personal agenda button

#### e) Featured Speakers Sidebar
- Speaker gallery (6-8 speakers)
- Filter by track
- Click for detailed bio page

---

### 4. Speakers Page

**Purpose:** Showcase conference speakers

**Sections:**

#### a) Speaker Grid
- **Layout:** 3-4 column responsive grid
- **Per Speaker Card:**
  - Photo (200x200px, circular or rounded)
    - *Dummy:* "Speaker Professional Photo"
  - Name (bold, prominent)
  - Title/Organization
  - Expertise/Track
  - Short bio (2-3 lines)
  - Social links (2-3 icons: Twitter, LinkedIn, Website)
  - "View Profile" link

#### b) Filters
- By track/topic
- By type (Keynote, Panel, Facilitator)
- Search by name

#### c) Individual Speaker Profile Page
- Large speaker photo
- Full bio (500-1000 words)
- Speaking experience/credentials
- Current role and organization
- Social media links
- Sessions speaker will lead (with links)
- Related speakers (4 cards)

---

### 5. Call for Proposals Page

**Purpose:** Collect speaker submissions and session proposals

**Sections:**

#### a) CFP Header Banner
- Deadlines prominently displayed
- Overview of submission types available
- Key information about what's being accepted

#### b) Submission Guidelines
- **Guidelines Section (collapsible/tabbed):**
  1. General Guidelines
     - Proposal structure
     - Language requirements
     - Content standards
  2. Submission Types
     - Keynote presentations
     - Parallel sessions (30/45/60 min)
     - Workshops
     - Panel discussions
     - Lightning talks
  3. Speaker Requirements
     - Bio length requirements
     - Photo requirements
     - Availability expectations
  4. Selection Process
     - Timeline
     - Notification date
     - Review criteria

#### c) Important Dates/Timeline
- **Visual Timeline:**
  - "CFP Opens" - date
  - "Submission Deadline" - date (highlighted)
  - "Notification Sent" - date
  - "Program Published" - date
  - "Conference Dates" - June 3-5, 2026

#### d) Submission Form
- **Multi-step form or single long form:**
  1. Proposer Information
     - First name *
     - Last name *
     - Email *
     - Phone number
     - Organization *
     - Position/Title *
     - Country *
     - Biography (500 words max) *
     - Photo upload (JPG/PNG, 300x300px)
     - Social media profiles (optional)

  2. Proposal Details
     - Session title *
     - Track/Theme *
     - Session type (dropdown) *
     - Session duration (dropdown) *
     - Audience level (Beginner/Intermediate/Advanced)
     - Session description (500 words max) *
     - Learning objectives (3-5 bullet points)
     - Key topics to cover
     - Proposed methodology
     - How is this relevant to African context?

  3. Co-presenters (if applicable)
     - Add up to 3 co-presenters
     - Name, email, organization for each

  4. Additional Information
     - Equipment/tech requirements
     - Special accommodations needed
     - Willingness to record session
     - Marketing content (YouTube video link, etc.)

  5. Terms & Conditions
     - Checkbox: Agree to CFP terms
     - Checkbox: Agree to Code of Conduct

- **Form Actions:**
  - "Save as Draft" button
  - "Submit Proposal" button
  - Validation messages for required fields

#### e) Post-Submission
- Confirmation message with:
  - Submission number/reference
  - Details confirmation
  - Next steps
  - Timeline expectations

---

### 6. Registration Page

**Purpose:** Handle ticket purchasing and attendee registration

**Sections:**

#### a) Registration Header
- Progress indicator (Step 1, 2, 3)
- Estimated completion time

#### b) Ticket Selection (Step 1)
- **3-column ticket cards:**
  1. Early Bird
     - Price: €390
     - Features list
     - "Select" button
     - Badge: "Limited Available"

  2. Standard
     - Price: €590
     - Features list
     - "Select" button (highlighted as most popular)

  3. Engagement Pass
     - Price: €790
     - Features list
     - "Select" button
     - Badge: "Application Required"
     - Note: "Special pass for decision-makers and leaders"

- **Note Section:**
  - "African Participation Discount Available: €395"
  - "Includes: Conference App, Coffee Breaks, Lunches (June 4-5)"
  - "Excludes: Pre-conference events (June 3), Accommodation, Travel"

#### c) Attendee Information Form (Step 2)
- **Personal Information:**
  - First name * (as should appear on badge)
  - Last name *
  - Email *
  - Phone *
  - Country *
  - Organization
  - Job title
  - LinkedIn profile (optional)

- **Engagement Pass Applicants Only:**
  - Radio buttons: "Yes/No: I wish to apply for Engagement Pass bilateral meetings"
  - If Yes, show:
    - Text area: Explain interest in bilateral meetings
    - Checkbox: "I understand application is subject to approval"

- **Special Requirements:**
  - Text area: Dietary restrictions
  - Text area: Accessibility needs
  - Checkbox: Interested in conference app early access

#### d) Billing Information (Step 2b)
- **Billing Address:**
  - First name *
  - Last name *
  - Organization *
  - Street address *
  - City *
  - Country *
  - Postal code *
  - Email *
  - VAT ID (optional)
  - Note: "Exclusive of VAT if applicable"

#### e) Payment (Step 3)
- **Order Summary:**
  - Ticket type
  - Quantity
  - Unit price
  - Subtotal
  - VAT (if applicable)
  - Total (bold, large)

- **Payment Method Selection:**
  - Credit/Debit Card (Visa, Mastercard, Amex)
  - PayPal
  - Bank Transfer
  - Note: "All payments secured with SSL encryption"

- **Payment Form (integrated or redirect):**
  - Card details fields
  - Billing address confirmation
  - Security note

#### f) Confirmation (Step 4)
- Success message
- Ticket details and reference number
- Confirmation email notice
- "Download Ticket" button
- Add to calendar options (Google Calendar, Outlook, iCal)
- "Visit Event Schedule" button

---

### 7. Venue & Logistics Page

**Purpose:** Provide practical information for attendees

**Sections:**

#### a) Venue Details
- **Venue Name & Info:**
  - Large heading
  - Full address
  - Contact information
  - Landmark/intersection description
  - "Get Directions" button

#### b) Interactive Map
- Google Maps embed (full-width)
- Marked conference venue
- Nearby hotels, airport, transportation
- *Dummy:* "Accra, Ghana - Venue Location Map"

#### c) Accessibility Information
- Wheelchair accessibility
- Parking availability
- Accessible restrooms
- Sign language interpretation
- Dietary accommodations available
- Contact for special needs

#### d) Accommodation
- **Section:** "Where to Stay"
- Recommended hotels (3-5 hotels)
- Per hotel:
  - Hotel name and photo
  - Distance to venue
  - Price range
  - Short description
  - Booking link/button
  - Amenities icons

#### e) Travel Information
- **Getting There:**
  - Airport information
  - Distance from airport to venue
  - Transportation options (taxi, ride-share, public transit)
  - Estimated travel time
  - Cost estimates

- **Getting Around:**
  - Local transportation
  - Ride-sharing apps available
  - Best practices for visitors

#### f) Local Information
- **Explore Accra:**
  - Tourist attractions
  - Restaurants and dining
  - Shopping and markets
  - Cultural sites
  - Weather and climate info for June
  - Currency and exchange info
  - Emergency contacts

---

### 8. Sponsorship Page

**Purpose:** Attract sponsors and partners

**Sections:**

#### a) Sponsorship Header
- Headline: "Become a Sponsor"
- Overview of sponsorship opportunity
- Expected reach/audience stats

#### b) Sponsorship Levels
- **4-5 Column Cards (or tabbed interface):**
  1. **Platinum**
     - Investment amount
     - Logo placement (5-6 mentions)
     - Booth size
     - Speaking opportunities
     - Passes included (10)
     - Custom benefits
     - "Inquire" button

  2. **Gold**
     - Investment amount
     - Logo placement (4 mentions)
     - Booth size
     - Passes included (6)
     - Benefits list
     - "Inquire" button

  3. **Silver**
     - Investment amount
     - Logo placement (3 mentions)
     - Booth size
     - Passes included (4)
     - Benefits list
     - "Inquire" button

  4. **Bronze**
     - Investment amount
     - Logo placement (2 mentions)
     - Passes included (2)
     - Benefits list
     - "Inquire" button

#### c) Sponsorship Benefits Overview
- Grid showing what each level includes
- Comparison chart functionality
- Expandable detail sections

#### d) Previous Sponsors Showcase
- Logo grid showing past sponsors
- Testimonial from sponsor representative
- *Dummy:* "Previous Sponsor Logos"

#### e) Sponsorship Prospectus
- Downloadable PDF document
- Detailed benefits breakdown
- Application process
- Contact information
- "Download PDF" button
- "Request Information" button

#### f) Contact & Inquiry Form
- Organization name *
- Contact name *
- Email *
- Phone *
- Interest level (dropdown: Platinum, Gold, Silver, Bronze, Unsure)
- Message
- "Submit Inquiry" button

---

### 9. News & Updates Page

**Purpose:** Share conference news and updates

**Sections:**

#### a) Featured News Item
- **Large featured card:**
  - Featured image (800x400px)
    - *Dummy:* "Latest Conference News Image"
  - Headline
  - Date published
  - Category tag
  - Author
  - Excerpt (2-3 lines)
  - "Read More" link

#### b) News Grid
- **2-3 Column responsive grid (latest below featured):**
- Per card:
  - Thumbnail image (300x200px)
    - *Dummy:* "News Article Image"
  - Headline
  - Date
  - Category tag (color-coded)
  - Excerpt
  - "Read More" link

#### c) Filters & Search
- Search box (by title, content)
- Category filter dropdown
- Date range filter
- Sort by (newest, oldest, alphabetical)

#### d) Full Article Page
- Featured image (full-width)
- Headline
- Publication date
- Author bio with photo
- Share buttons (social media)
- Article content (rich text)
- Tags
- Related articles sidebar (3 cards)
- Comment section or social discussion

---

### 10. Contact Page

**Purpose:** Provide multiple contact options

**Sections:**

#### a) Contact Information
- **Address:** Full conference office address
- **Email:** Main contact email
- **Phone:** Contact phone number(s)
- **Office Hours:** Operating hours
- **Social Media:** Links to all social channels

#### b) Quick Support Links
- FAQ page link
- Frequently asked question cards (4-6 items)
  - Each expandable/clickable
  - *Dummy:* "Common questions and answers"

#### c) Contact Form
- **Name** * (required)
- **Email** * (required)
- **Subject** * (required, dropdown options):
  - General Inquiry
  - Registration Help
  - Speaker/Proposal Question
  - Sponsorship Inquiry
  - Technical Issue
  - Other

- **Message** * (text area, 500+ characters)
- **Attachment** (optional file upload)
- **Checkbox:** "I would like a response by email" (checked)
- **Captcha:** reCAPTCHA or similar
- **Submit button**
- **Reset button**

#### d) Confirmation
- Success message displayed
- Reference number provided
- Expected response time mentioned
- Option to track inquiry status

---

## Feature Specifications

### 1. User Registration & Authentication

**Guest Registration (Public):**
- No account creation required for ticket purchase
- Email used as primary identifier
- Password sent after transaction
- Option to create account post-purchase

**Speaker Portal:**
- Separate login portal for speakers
- View speaking session details
- Update speaker profile
- Access speaker resources and guidelines

**Admin Portal:**
- Full dashboard with analytics
- Attendee management
- Speaker/proposal management
- Sponsor management
- News/content publishing

### 2. Payment Processing

**Payment Gateway:**
- Multiple payment methods (Credit Card, PayPal, Bank Transfer)
- SSL encryption (128-bit minimum)
- Currency: EUR (€)
- Multi-currency support (automatic conversion)
- VAT handling for EU residents

**Invoice Generation:**
- Automatic invoice on successful payment
- PDF downloadable
- Invoice number tracking
- Tax documentation (if applicable)

**Refund Policy:**
- Automatic refund processing for cancellations > 8 weeks before event
- €50 handling charge applied
- No refund for non-attendance
- Replacement attendee allowed without additional cost

### 3. Email Notifications

**Transactional Emails:**
- Registration confirmation
- Ticket details and download link
- Payment receipt/invoice
- Shipping confirmation
- Account credentials (if created)
- Reminder emails (1 week, 1 day before event)

**Proposals:**
- CFP submission confirmation
- Status update (accepted/declined)
- Speaker schedule confirmation
- Speaker final reminders

**Administrative:**
- Inquiry/contact form responses
- Newsletter sign-ups confirmation

### 4. Responsive Design

**Breakpoints:**
- Desktop: 1200px and above
- Tablet: 768px - 1199px
- Mobile: 320px - 767px

**Responsive Elements:**
- Navigation collapses to hamburger menu on mobile
- Grid layouts reflow to single column
- Images scale appropriately
- Forms optimized for touch input
- Buttons sized for thumb interaction

### 5. Accessibility (WCAG 2.1 AA Standard)

- Color contrast ratio 4.5:1 for text
- Keyboard navigation support
- Screen reader compatibility
- Alt text for all images
- Form labels associated with inputs
- Focus indicators visible
- Videos with captions/transcripts

### 6. SEO Optimization

- Meta titles and descriptions per page
- Proper heading hierarchy (h1, h2, h3)
- XML sitemap
- Robots.txt
- Schema markup for events
- Open Graph tags for social sharing
- Mobile-friendly design
- Fast loading speed optimization

---

## Forms & Data Collection

### Primary Forms

**1. Registration Form** (see Reg section)
**2. Call for Proposals Form** (see CFP section)
**3. Sponsorship Inquiry Form** (see Sponsorship section)
**4. Contact Form** (see Contact section)
**5. Newsletter Signup**
   - Email input
   - "Subscribe" button
   - Confirmation message

**6. Engagement Pass Application** (Part of registration)

### Data Validation

- Required field validation (client-side)
- Email format validation
- Phone number format validation
- Date range validation
- File upload validation (size, format)
- Server-side validation before database storage

### Privacy & Compliance

- Privacy Policy linked on all forms
- GDPR compliance (data protection)
- Opt-in for email communications
- Secure data transmission (HTTPS/SSL)
- Data retention policies documented

---

## Design System

### Color Palette

**Primary Colors:**
- Primary Brand Color: #2170A5 (Professional Blue) or #008B8B (Teal)
- Secondary: #FFB400 (Gold/Accent)
- Success: #28A745 (Green)
- Warning: #FFC107 (Yellow)
- Error: #DC3545 (Red)
- Neutral: #6C757D (Gray)

**Background Colors:**
- Primary Background: #FFFFFF (White)
- Secondary Background: #F8F9FA (Light Gray)
- Dark Background: #343A40 (Dark Gray/Charcoal)

**Text Colors:**
- Primary Text: #212529 (Dark Gray)
- Secondary Text: #6C757D (Medium Gray)
- Light Text: #FFFFFF (White)
- Link Color: #2170A5 (Primary Blue)

### Typography

**Fonts:** (Replace with your chosen fonts)
- Headlines: [Display Font - e.g., Poppins Bold, Montserrat Bold]
- Body: [Professional Font - e.g., Inter, Open Sans, Roboto]
- Monospace: [Courier New, Monaco] for code/technical content

**Font Sizes:**
- H1: 48px
- H2: 36px
- H3: 28px
- H4: 20px
- H5: 18px
- H6: 16px
- Body: 14-16px
- Small: 12px

**Font Weights:**
- Bold: 700
- Semi-bold: 600
- Normal: 400
- Light: 300

### Spacing & Layout

**Grid System:**
- 12-column responsive grid
- Gutter spacing: 20px (desktop), 16px (tablet), 12px (mobile)

**Common Spacing Units:**
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- xxl: 48px

**Component Sizing:**
- Button height: 44px (min for mobile touch)
- Input height: 40px
- Card padding: 24px
- Section padding: 60px (top/bottom), 40px (sides)

### Button Styles

**Primary Button:**
- Background: Primary Blue (#2170A5)
- Text Color: White
- Padding: 12px 32px
- Border radius: 4px
- Hover state: Darker shade or slight elevation

**Secondary Button:**
- Background: Transparent
- Border: 2px solid Primary Blue
- Text Color: Primary Blue
- Hover: Light blue background

**Disabled Button:**
- Opacity: 50%
- Cursor: Not allowed

### Icons

- Icon set: Font Awesome or Material Icons
- Icon size: 16px (inline), 24px (menu), 32px (section), 48px (hero)
- Color: Match context (primary blue for links, gray for secondary)

### Images & Media

**Image Requirements:**
- JPG/PNG format
- Optimized for web (compressed)
- Responsive images (multiple sizes)
- Always include alt text

**Dummy Images Specifications:**
- Hero images: 1920x600px
- Card images: 300x200px
- Speaker photos: 200x200px (circular)
- Sponsor logos: 150x80px
- Team photos: 400x400px

---

## Technical Stack

### Recommended Technology

**Backend:**
- PHP 7.4+ (current site uses PHP)
- MySQL 5.7+ or MariaDB (database)
- Framework: Laravel, WordPress, or custom MVC

**Frontend:**
- HTML5
- CSS3 (with preprocessor: SASS/LESS recommended)
- JavaScript (ES6+)
- jQuery or modern framework (React, Vue.js optional)

**CMS Options:**
- Custom PHP development
- WordPress with custom theme
- Drupal
- Statamic CMS

### Required Libraries & Tools

**Payment Processing:**
- Stripe API or PayPal API
- SSL certificate (essential)

**Email Service:**
- SendGrid, Mailgun, or SMTP server
- Email templates

**Analytics:**
- Google Analytics 4
- Heatmap tools (Hotjar optional)

**Forms & Validation:**
- jQuery Validate or custom validation
- reCAPTCHA for spam protection

**Hosting Requirements:**
- Minimum: 2GB RAM, 20GB storage
- SSL certificate (required)
- PHP support
- MySQL/MariaDB support
- Email capability
- Backup solutions

---

## Navigation Flow

### Primary Navigation Structure

```
HOME
├── ABOUT CONFERENCE
│   ├── Overview
│   ├── Theme & Objectives
│   └── Previous Editions
├── PROGRAM & AGENDA
│   ├── Schedule View
│   ├── Speaker Profiles
│   └── Session Details
├── SPEAKERS
│   └── Speaker Directory & Profiles
├── CALL FOR PROPOSALS
│   ├── Guidelines
│   ├── Timeline
│   └── Submission Form
├── REGISTER
│   ├── Ticket Selection
│   ├── Registration Form
│   └── Payment
├── VENUE & LOGISTICS
│   ├── Venue Details
│   ├── Accommodation
│   ├── Travel Info
│   └── Local Guide
├── SPONSORS
│   ├── Sponsorship Levels
│   ├── Prospectus
│   └── Inquiry Form
├── NEWS & UPDATES
│   ├── News Grid
│   └── Full Articles
└── CONTACT
    ├── Contact Form
    ├── FAQ
    └── Help Center
```

### User Journey Maps

**Journey 1: Ticket Purchase**
Homepage → Register → Ticket Selection → Attendee Form → Payment → Confirmation → Email

**Journey 2: Speaker Submission**
Homepage → Call for Proposals → Guidelines → Submission Form → Confirmation → Portal Login

**Journey 3: Sponsor Inquiry**
Homepage → Sponsors → Review Levels → Inquiry Form → Confirmation → Sales Contact

**Journey 4: Information Gathering**
Homepage → About → Program → Speakers → Venue → Contact

---

## Content Sections Detail

### Content Placeholders

**Homepage Dummy Content:**
```
Hero Section:
- Headline: "19th Atlas Conference Conference 2026"
- Subheadline: "Shaping the Future of Digital Education Across Africa"
- Background: [VENUE_PHOTO] - Replace with actual conference venue
- CTAs: "Register Now", "View Agenda"

Featured Speakers:
- [SPEAKER_1_PHOTO] John Doe - EdTech Director, Ministry of Education
- [SPEAKER_2_PHOTO] Jane Smith - CEO, Digital Learning Platform
- [SPEAKER_3_PHOTO] Ahmed Hassan - AI Education Researcher
- [SPEAKER_4_PHOTO] Maria Garcia - eLearning Solutions Expert

Testimonials:
- "This conference transformed my approach to digital education..." - [ATTENDEE_PHOTO]
- "The networking opportunities were invaluable..." - [ATTENDEE_PHOTO]
- "Best conference I've attended on African education..." - [ATTENDEE_PHOTO]

Sponsors: [SPONSOR_LOGO_1] [SPONSOR_LOGO_2] [SPONSOR_LOGO_3]
```

### Key Content to Replace

| Element | Dummy | Actual |
|---------|-------|--------|
| Hero Image | Generic conference venue | Accra venue photos |
| Speaker Photos | Placeholder avatars | Real speaker photos |
| Speaker Bios | 2-3 line generic text | Full speaker bios |
| Testimonials | Generic feedback | Actual attendee testimonials |
| Sponsor Logos | Placeholder rectangles | Company logos |
| Venue Details | Generic address | Actual venue address |
| Pricing | €390, €590, €790 | Confirmed pricing |
| Dates | June 3-5, 2026 | Confirmed dates |
| Theme | Generic theme text | Official conference theme |

---

## Integration Requirements

### Third-Party Integrations

1. **Payment Gateway**
   - Stripe or PayPal integration
   - Test credentials required
   - Webhook handling for payment confirmation

2. **Email Service**
   - SendGrid or Mailgun for transactional emails
   - Email template design and customization
   - List management for newsletters

3. **Maps**
   - Google Maps API for venue location
   - API key required
   - Custom markers for venue and nearby locations

4. **Analytics**
   - Google Analytics 4 tracking
   - Event tracking for key conversions
   - Dashboard for monitoring

5. **Social Media**
   - Facebook Pixel (if applicable)
   - Twitter feed embed (optional)
   - Social sharing buttons on content

6. **Video Integration**
   - YouTube embed for keynote teasers
   - Video streaming for past conference footage
   - Embedded video players

7. **Calendar Integration**
   - iCal format export for schedule
   - Google Calendar, Outlook sync options

### API Endpoints Needed

- `/api/tickets` - Get ticket types and pricing
- `/api/register` - Submit registration
- `/api/proposals` - Submit CFP proposal
- `/api/speakers` - Get speaker list and details
- `/api/schedule` - Get conference schedule
- `/api/sponsors` - Get sponsor information
- `/api/contact` - Submit contact form

---

## Development Checklist

### Phase 1: Setup
- [ ] Database design and setup
- [ ] Server/hosting configuration
- [ ] SSL certificate installation
- [ ] Version control setup (Git)
- [ ] Development environment setup

### Phase 2: Core Pages
- [ ] Homepage
- [ ] About page
- [ ] Program/Agenda page
- [ ] Speakers page
- [ ] Contact page

### Phase 3: Critical Functionality
- [ ] Registration system
- [ ] Payment integration
- [ ] Email notifications
- [ ] Form validation and submission

### Phase 4: Extended Features
- [ ] Call for Proposals
- [ ] Sponsorship portal
- [ ] News/Updates section
- [ ] Admin dashboard

### Phase 5: Optimization & Launch
- [ ] SEO optimization
- [ ] Performance testing
- [ ] Security audit
- [ ] Accessibility testing (WCAG 2.1 AA)
- [ ] Cross-browser testing
- [ ] Mobile responsiveness testing
- [ ] Load testing
- [ ] Content population
- [ ] Training for content team
- [ ] Soft launch (testing)
- [ ] Full launch

---

## Maintenance & Support

### Post-Launch Tasks

**Monitoring:**
- Server uptime monitoring
- Error log reviews
- Analytics review (weekly/monthly)
- Performance monitoring

**Updates:**
- Security patches
- Software dependency updates
- Content updates (news, speakers)
- Seasonal maintenance

**Backup & Recovery:**
- Daily database backups
- Weekly full site backups
- Disaster recovery plan documented
- Regular backup restoration testing

---

## Success Metrics

### Key Performance Indicators (KPIs)

1. **Conversion Metrics:**
   - Ticket conversion rate (target: 3-5% of website visitors)
   - CFP submission volume
   - Sponsorship inquiries

2. **Engagement Metrics:**
   - Average session duration (target: 2+ minutes)
   - Pages per session (target: 4+ pages)
   - Bounce rate (target: < 40%)
   - Return visitor percentage

3. **Technical Metrics:**
   - Page load time (target: < 3 seconds)
   - Uptime (target: 99.9%)
   - Mobile traffic percentage
   - Form submission completion rate

4. **Traffic Metrics:**
   - Total website visitors
   - Traffic by source (organic, social, paid, direct)
   - Top landing pages
   - Geographic distribution

---

## Document Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | Jan 6, 2026 | Product Team | Initial product specification document |

---

## Appendix A: Glossary

- **CFP:** Call for Proposals
- **CMS:** Content Management System
- **CTA:** Call To Action
- **GDPR:** General Data Protection Regulation
- **SEO:** Search Engine Optimization
- **SSL:** Secure Sockets Layer
- **VAT:** Value Added Tax
- **API:** Application Programming Interface
- **WCAG:** Web Content Accessibility Guidelines

---

**Document Confidentiality:** This is a development specification document.  
**Last Updated:** January 6, 2026

---

*All dummy text, placeholder images, and sample data should be replaced with actual conference content before launch.*