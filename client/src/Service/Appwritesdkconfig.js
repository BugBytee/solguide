import { Appwrite } from "appwrite";
export const appwrite = new Appwrite();

appwrite.setEndpoint("http://localhost/v1").setProject("627afc6d8fe392af7216");
export const db=appwrite.database;
export const account = appwrite.account;
export const CollectionID="627b00297fbb5f9ea809";
