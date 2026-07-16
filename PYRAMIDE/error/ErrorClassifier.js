const ErrorClassifier = {
    classify(error) {
        if (error.level === "FATAL") return "❌ FATAL";
        if (error.level === "CRITICAL") return "⚠️ CRITICAL";
        if (error.level === "WARNING") return "⚡ WARNING";
        return "ℹ️ INFO";
    }
};
