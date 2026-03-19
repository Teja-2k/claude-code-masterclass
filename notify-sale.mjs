// Quick sale notification script
// Usage: node notify-sale.mjs "buyer@email.com" "$29"
// Subscribe to notifications: install ntfy app and subscribe to topic "hustlebot-sales"
// Or visit: https://ntfy.sh/hustlebot-sales-teja2k in browser

const buyer = process.argv[2] || 'unknown';
const amount = process.argv[3] || '$29';

async function notifySale() {
  try {
    const res = await fetch('https://ntfy.sh/hustlebot-sales-teja2k', {
      method: 'POST',
      headers: { 'Title': 'New Sale: Claude Code Masterclass', 'Priority': 'high', 'Tags': 'moneybag' },
      body: `${amount} received from ${buyer}\nProduct: Claude Code Masterclass\nTime: ${new Date().toISOString()}`,
    });
    console.log(res.ok ? '✅ Notification sent!' : `❌ Failed: ${res.status}`);
  } catch (e) {
    console.log('❌ Notification error:', e.message);
  }
}

notifySale();
