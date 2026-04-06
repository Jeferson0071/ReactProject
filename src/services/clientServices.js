import { eq } from "drizzle-orm";
import { db } from "../db/db.js";
import { clients } from "../db/schema.js";


export const getClients = async () => {
    const rows = await db.select()
    .from(clients)
    .where(eq(clients.isactive, true));
    return rows;
};

export const createClients = async (data) => {
    const rows = await db.insert(clients).values(data).returning();
    return rows;
};

export const deleteClients = async (id) => {
    const rows = await db.update(clients)
    .set({isactive: false})
    .where(eq(clients.id, id))
    .returning();
    return rows;
}

export const updateClients = async (id, data) => {
    const rows = await db.update(clients)
        .set({
            name: data.name,
            email: data.email,
            job: data.job,
            rate: data.rate,
            isactive: data.isactive
        })
        .where(eq(clients.id, id))
        .returning();
    return rows;
};