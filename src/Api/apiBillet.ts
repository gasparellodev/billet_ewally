import BilletController from "../Controllers/BilletController";

export default (app: any) => {
    app.get('/billet/:billet', (req: any, res: any, next: any) => {
        try {
            const billetController = new BilletController(req.params.billet);
            const data = billetController.getResponseData();
            return res.status(201).json(data);
        } catch (error) {
            next(error);
        }
    });
}