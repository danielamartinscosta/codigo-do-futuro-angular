export class Estoque {
    private static estoque: any []= [];

    public static lista(): any[] {
        return this.estoque;

       
    }

    public static add(estoque: any): void {
        this.estoque.push(estoque)
    }
}