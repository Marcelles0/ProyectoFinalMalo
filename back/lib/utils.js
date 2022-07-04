const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const autheader = req.headers('authorization');
    if (autheader == null){
        res.status(400).json({
            status: "failed",
            data: [],
            error: 'Authorization not found',
          });
    }
    const token = autheader.split(' ')[1];
    if (token == null){
        res.status(400).json({
            status: "failed",
            data: [],
            error: 'Token not found',
          });
    }else {
        jwt.verify(token, process.env.SECRET, (error, payload)=>{
            if (error) {
                res.status(403).json({
                    status: "failed",
                    data: [],
                    error: "Token doesn't match",
                  });
            } else {
                req.payload = payload;
                next();
            }
        });
    }
}

const generateToken = (payload, refresh = false) => {
    if (refresh) {
        return jwt.sign({
            role: payload[0].role,
        }, process.env.REFRESH_SECRET, {
            expiresIn: '3m'
        });
    } else {
        return jwt.sign({
            role: payload[0].role,
        }, process.env.SECRET, {
            expiresIn: '1m'
        });
    }
}

const verifyRefreshToken = (req, res, next) => {
    const autheader = req.headers('authorization');
    if (autheader == null){
        res.status(400).json({
            status: "failed",
            data: [],
            error: 'Authorization not found',
          });
    }
    const token = autheader.split(' ')[1];
    if (token == null){
        res.status(400).json({
            status: "failed",
            data: [],
            error: 'Token not found',
          });
    }else {
        jwt.verify(token, process.env.REFRESH_SECRET, (error, payload)=>{
            if (error) {
                res.status(403).json({
                    status: "failed",
                    data: [],
                    error: "Token doesn't match",
                  });
            } else {
                req.payload = payload;
                next();
            }
        });
    }
}

module.exports = {verifyToken, generateToken, verifyRefreshToken};