"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* server.ts */
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 8000;
app.get("/", (req, res) => {
    res.send("Hello, world!");
});
app.get("/api", (req, res) => {
    res.json([
        {
            id: 1,
            name: "りんご",
            price: 200,
        },
        {
            id: 2,
            name: "バナナ",
            price: 300,
        },
        {
            id: 3,
            name: "みかん",
            price: "150",
        },
        {
            id: 4,
            name: "メロン",
            price: "2000",
        },
    ]);
});
app.listen(port, () => {
    console.log(`port ${port} でサーバー起動中`);
});
exports.default = app;
