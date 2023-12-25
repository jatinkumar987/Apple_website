const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Set 'views' as the views directory
app.set('views', path.join(__dirname, 'views'));
// Set EJS as the view engine
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
  // Render the 'index' view (index.ejs)
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
