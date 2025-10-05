import scrape from 'website-scraper';
import { resolve } from 'path';

scrape({
  urls: ['https://www.indianleathermanufacturer.com/'],
  directory: resolve('site'),
  recursive: true,
  maxDepth: 2,
  sources: [
    { selector: 'img', attr: 'src' },
    { selector: 'link[rel="stylesheet"]', attr: 'href' },
    { selector: 'script', attr: 'src' }
  ]
}).then(() => console.log('Scraping complete.'));
