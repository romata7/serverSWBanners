const Client = require('../models/clientModel');

exports.getAllClients = async (req, res) => {
    try {
        const clients = await Client.getAll();
        res.json(clients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getClientById = async (req, res) => {
    try {
        const client = await Client.getById(req.params.id);
        if (!client) {
            return res.status(404).json({ message: 'Client not found' });
        }
        res.json(client);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createClient = async (req, res) => {
    try {
        const newClient = await Client.create(req.body);
        res.status(201).json(newClient);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateClient = async (req, res) => {
    try {
        const updatedClient = await Client.update(req.params.id, req.body);
        res.json(updatedClient);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteClient = async (req, res) => {
    try {
        await Client.delete(req.params.id);
        res.json({ message: 'Client deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};