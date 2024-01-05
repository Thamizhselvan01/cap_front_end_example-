import http from "./http.js";

const assignQuery = (queryId, assignedToId) => {
    return http.patch("/assign/query", { queryId, assignedToId });
};

export { assignQuery };
