export const toRna = (dnaStrand) => {
  const dnaToRna = {
    'C': 'G',
    'G': 'C',
    'T': 'A',
    'A': 'U',
    empty: '',
    };

    let rnaStrand = dnaStrand.split('').map(nucleotide => {
      nucleotide = dnaToRna[nucleotide] || dnaToRna.empty;
      return nucleotide;
    }).join('');
    return rnaStrand;
  }