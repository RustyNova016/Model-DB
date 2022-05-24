const DEFAULT_NAMESPACE = 'Server';

const info = (message: any, namespace?: string) => {
    if (typeof message === 'string') {
        console.info(`[${getDate()}] [${namespace || DEFAULT_NAMESPACE}] [INFO] ${message}`);
    } else {
        console.info(`[${getDate()}] [${namespace || DEFAULT_NAMESPACE}] [INFO]`, message);
    }
};

const warn = (message: any, namespace?: string) => {
    if (typeof message === 'string') {
        console.warn(`[${getDate()}] [${namespace || DEFAULT_NAMESPACE}] [WARN] ${message}`);
    } else {
        console.warn(`[${getDate()}] [${namespace || DEFAULT_NAMESPACE}] [WARN]`, message);
    }
};

const error = (message: any, namespace?: string) => {
    if (typeof message === 'string') {
        console.error(`[${getDate()}] [${namespace || DEFAULT_NAMESPACE}] [ERROR] ${message}`);
    } else {
        console.error(`[${getDate()}] [${namespace || DEFAULT_NAMESPACE}] [ERROR]`, message);
    }
};

const getDate = () => {
    return new Date().toISOString();
};

const logging = {info, warn, error};

export default logging;