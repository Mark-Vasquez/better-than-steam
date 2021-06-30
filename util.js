const db = require("./db/models");
const asyncHandler = (handler) => (req, res, next) =>
	handler(req, res, next).catch(next);



const logInUser = (req, thisUser) => {
	req.session.auth = {
		user: thisUser,
	};
};

const logOutUser = (req, res) => {
	delete req.session.auth;
};

const checkSessionToken = async (req, res, next) => {
	//check req.session.auth
	if (req.session.auth) {
		try {
			const userId = req.session.auth.user.id;
			const user = await db.User.findByPk(userId);
			if (user) {
				res.locals.authenticated = true;
				res.locals.user = user;
				next();
			}
		} catch (e) {
			// console.error(e);
			// next(e);
		}
	} else {
		res.locals.authenticated = false;
		next();
	}
};

const testCheckSession = async (req) => {
	const session = req.session;
	console.log(session.user);
	//find user in database from session.auth.user
};

module.exports = {
	logInUser,
	asyncHandler,
	checkSessionToken,
	logOutUser
};
