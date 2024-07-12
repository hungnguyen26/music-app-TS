"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dashboard_roter_1 = require("./dashboard.roter");
const config_1 = require("../../config/config");
const topic_router_1 = require("./topic.router");
const songs_router_1 = require("./songs.router");
const adminRouter = (app) => {
    const PATH_ADMIN = config_1.systemConfig.prefixAdmin;
    app.use(`/${PATH_ADMIN}/dashboard`, dashboard_roter_1.dashboardRouter);
    app.use(`/${PATH_ADMIN}/topics`, topic_router_1.topicRouter);
    app.use(`/${PATH_ADMIN}/songs`, songs_router_1.songRouter);
};
exports.default = adminRouter;
