import * as clientServices from "../services/clientServices.js";


export const getClients = async (req, res) => {
    try{
        const clients = await clientServices.getClients();
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createClients = async (req, res) => {
    try {
        const data = req.body; 
        const clients = await clientServices.createClients(data); 
        res.status(201).json(clients);
    } catch (error) {
        console.log("erro:", error); 
        res.status(500).json({ error: error.message });
    }
};

export const deleteClients = async (req, res) => {
    try{
        const { id } = req.params;
        const clients = await clientServices.deleteClients(id);
        res.status(200).json(clients);
    } catch (error) {
        console.log("erro:", error);
        res.status(500).json({ error: error.message });
    }
}

export const updateClients = async (req, res) => {
    try {
        const id = Number(req.params.id); 
        const data = req.body;
        console.log("id:", id, "data:", data);
        const result = await clientServices.updateClients(id, data);
        res.status(200).json(result);
    } catch (error) {
        console.log("erro:", error.message);
        res.status(500).json({ error: error.message });
    }
};