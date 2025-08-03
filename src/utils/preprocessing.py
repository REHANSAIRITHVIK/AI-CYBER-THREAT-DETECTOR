from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from loguru import logger

def preprocess_data(df, config):
    df = df.dropna()
    logger.info("🔧 Dropped NA values")

    label_encoders = {}
    for col in df.select_dtypes(include='object').columns:
        le = LabelEncoder()
        df[col] = le.fit_transform(df[col])
        label_encoders[col] = le

    X = df.drop("label", axis=1)
    y = df["label"]

    X_train, X_test, y_train, y_test = train_test_split(
        X, y,
        test_size=config["test_size"],
        random_state=config["random_state"]
    )
    logger.info(f"📊 Train shape: {X_train.shape}, Test shape: {X_test.shape}")
    return X_train, X_test, y_train, y_test
