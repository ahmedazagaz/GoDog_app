import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';

export const config = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.app.godogs",
    projectId: "66b3a726002c76dda08f",
    databaseId: "66b78070003b869a7980",
    userCollectionId: "66b78106000c946acbbe",
    videoCollectionId: "66b781b80003b173b44f",
    storageId: "66dca6b1002bdc336267"
};

const {
    endpoint,
    platform,
    projectId,
    databaseId,
    userCollectionId,
    videoCollectionId,
    storageId
} = config;

const client = new Client();

client
    .setEndpoint(config.endpoint)
    .setProject(config.projectId)
    .setPlatform(config.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username,
        );

        if (!newAccount) throw new Error("Account creation failed");

        const avatarUrl = avatars.getInitials(username);

        await signIn(email, password);

        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl,
            }
        );

        return newUser;
    } catch (error) {
        console.error("Error creating user:", error);
        throw new Error(error.message);
    }
};

export const signIn = async (email, password) => {
    try {
        const session = await account.createEmailPasswordSession(email, password);
        return session;
    } catch (error) {
        console.error("Error signing in:", error);
        throw new Error("Failed to sign in: " + error.message);
    }
};

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get();

        if (!currentAccount) throw new Error("No current account found");

        const currentUser = await databases.listDocuments(
            config.databaseId,
            config.userCollectionId,
            [Query.equal("accountId", currentAccount.$id)]
        );

        if (!currentUser.documents.length) throw new Error("No user profile found");

        return currentUser.documents[0];
    } catch (error) {
        console.log(error)
    }
};


export const getAllPosts = async () => {
  try {
    const posts = await databases.listDocuments(
    databaseId,
    videoCollectionId
  )

    return posts.documents;
  } catch(error){
    throw new Error(error);
  }
}

export const getLatestPosts = async () => {
    try {
      const posts = await databases.listDocuments(
      databaseId,
      videoCollectionId,
      [Query.orderDesc("$createdAt", Query.limit(7))]
    )
  
      return posts.documents;
    } catch(error){
      throw new Error(error);
    }
}

export const searchPosts = async (query) => {
    try {
      const posts = await databases.listDocuments(
      databaseId,
      videoCollectionId,
      [Query.search("title", query)]
    )
  
      return posts.documents;
    } catch(error){
      throw new Error(error);
    }
  }

