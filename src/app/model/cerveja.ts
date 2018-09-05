export class Cerveja {
  public disponivel: true;

  constructor(public nome: string,
              public produtor: string,
              public urlImagem: string,
              public descrição: string,
              public precoCusto: number,
              public precoVenda: number,
              public qtd_minima: number,
              public estilo: string,
              public abv: number,
              public ibu: number,
              public recipiente: string,
              public volume: number) {
  }

}
