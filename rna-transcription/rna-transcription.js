export const toRna = (dnaStrand) => {
  const dnaToRna = {
    'C': 'G',
    'G': 'C',
    'T': 'A',
    'A': 'U',
    empty: '',
    };

    let rnaStrand = dnaStrand.split('').map(nucleotide => {
      console.log(nucleotide)
      nucleotide = dnaToRna[nucleotide] || dnaToRna.empty;
      console.log(nucleotide);
      return nucleotide;
    }).join('');
    return rnaStrand;
  }