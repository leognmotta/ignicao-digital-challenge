const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/work', (req, res) => {
  res.json([
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis sem in purus facilisis adipiscing at vitae sapien. Maecenas eget metus turpis. Integer ac molestie mauris. Aenean id libero eget ante dignissim faucibus.',
    'Morbi sit amet nunc et ante feugiat blandit id aliquam risus. Nulla mattis auctor mi sit amet interdum. Nam consequat, ipsum non tincidunt tincidunt, massa mi tincidunt augue, in elementum lectus sem in libero.',
    'Morbi feugiat est dui, quis scelerisque ipsum dictum quis. Fusce adipiscing est sodales aliquet vulputate. Etiam eget risus at purus fermentum mattis vitae eu sem. Maecenas tincidunt sapien in tortor adipiscing lacinia. Sed velit odio, pulvinar sagittis diam id, feugiat sodales lacus. Quisque magna nisl, aliquet id laoreet ut, placerat et felis. Suspendisse aliquet ullamcorper purus, luctus faucibus velit feugiat sed. Aenean interdum, elit ut dictum convallis,'
  ]);
});

app.get('/about', (req, res) => {
  res.json([
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis sem in purus facilisis adipiscing at vitae sapien. Maecenas eget metus turpis. Integer ac molestie mauris. Aenean id libero eget ante dignissim faucibus.',
    'Morbi feugiat est dui, quis scelerisque ipsum dictum quis. Fusce adipiscing est sodales aliquet vulputate. Etiam eget risus at purus fermentum mattis vitae eu sem. Maecenas tincidunt sapien in tortor adipiscing lacinia. Sed velit odio, pulvinar sagittis diam id, feugiat sodales lacus. Quisque magna nisl, aliquet id laoreet ut, placerat et felis. Suspendisse aliquet ullamcorper purus, luctus faucibus velit feugiat sed. Aenean interdum, elit ut dictum convallis, dolor arcu pulvinar neque, et congue elit nisl quis tellus. Aliquam auctor libero nec purus facilisis, sit amet fermentum metus lacinia.'
  ]);
});

app.listen(8080, () => {
  console.log('app listening on port 8080 🚀');
});
