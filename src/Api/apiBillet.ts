import BilletController from "../Controllers/BilletController";

export default (app: any) => {
    app.get('/boleto/:boleto', (req: any, res: any, next: any) => {
        try {
            const boletoController = new BilletController(req.params.boleto);
            const data = boletoController.getResponseData();
            return res.status(201).json(data);
        } catch (error) {
            next(error);
        }
    });
}