# Lady Trader Bot

A professional, dark-themed trading signal interface built with React and Tailwind CSS.

## Features

- **Telegram Integration**: Popup modal to join Telegram group
- **Platform Selection**: Support for 6 major trading platforms
- **Asset Selection**: 14 OTC currency pairs
- **Time Frame Options**: 1m, 2m, 3m, 5m, 15m
- **Random Signal Generation**: BUY/SELL signals with countdown timer
- **Responsive Design**: Mobile-friendly interface
- **Dark Theme**: Professional candlestick chart background

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

### Deployment to Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

## Components

- **PopupModal**: Telegram group invitation modal
- **Logo**: App branding and logo display
- **Dropdown**: Reusable dropdown component
- **Button**: Main action button with loading state
- **SignalDisplay**: Shows BUY/SELL signals
- **CountdownTimer**: Timer countdown based on selected timeframe

## Configuration

- Update the Telegram group link in `src/components/PopupModal.js`
- Modify platform/asset lists in `src/App.js`
- Customize colors in `tailwind.config.js`

## Tech Stack

- React 18
- Tailwind CSS
- Vercel (deployment)

## License

MIT