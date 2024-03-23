// import { Appwrite } from "appwrite";
// export const appwrite = new Appwrite();

// appwrite.setEndpoint("http://localhost/v1").setProject("627afc6d8fe392af7216");
// export const db = appwrite.database;
// export const account = appwrite.account;
// export const CollectionID = "627b00297fbb5f9ea809";


import { Account, Client, Databases, Storage } from "appwrite";
export const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("65fe5de378778866da35");
export const db = new Databases(client, "65ff1b89782150eb9c20");
export const account = new Account(client);
export const storage = new Storage(client);
export const CollectionID = "65ff1b9eab5723a84dd1";
