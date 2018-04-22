import React, { Component } from 'react';
import DescriptiveCarousel from '../DescriptiveCarousel/index';

class ExperimentsCarousel extends Component {
  render() {
    const slides = [
      {
        id: 'guggenheim',
        headline: 'Guggenheim: Åzone Futures Market',
        image: 'https://d2w9rnfcy7mm78.cloudfront.net/2077504/original_1d13c028817c3b014a7e5053ae07dae8.png',
        copy: 'A digital exhibition in the form of a marketplace for trading predictions about the future.',
      },
      {
        id: 'tci',
        headline: 'Library of Practical & Conceptual Resources',
        image: 'https://d2w9rnfcy7mm78.cloudfront.net/2077502/original_7a557ced63d7e01a4326768a891ad395.png',
        copy: 'A series of advice, reflections, and resources compiled by artists and published with The Creative Independent',
      },
      {
        id: 'cab',
        headline: 'Chicago Architecture Biennial Blog',
        image: 'https://d2w9rnfcy7mm78.cloudfront.net/2077505/original_6e96feaa4966a4935c520fe955185ec8.png',
        copy: 'An exhibition blog with embedded Are.na channels for exploring related content.',
      },
      {
        id: 'knight',
        headline: 'Knight Foundation Prototype: Pilgrim',
        image: 'https://d2w9rnfcy7mm78.cloudfront.net/2077503/original_72bc6a12885e17d647974aca082faab1.png',
        copy: 'An experimental web crawler created by Are.na that visualizes your browsing history.',
      },
    ];
    return (
      <DescriptiveCarousel slides={slides} />
    );
  }
}

export default ExperimentsCarousel;
