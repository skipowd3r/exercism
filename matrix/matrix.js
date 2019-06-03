export class Matrix {
  constructor(str){
    this.rows = str.split('\n').map(row => row.split(' ').map(Number))
    
    this.columns = this.rows[0].map((col, i) => this.rows.map(row => row[i]))
  }

}
console.log(new Matrix('1').rows[0]);
