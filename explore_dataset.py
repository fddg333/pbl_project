import kagglehub
import os
import pandas as pd

print("Downloading dataset...")
path = kagglehub.dataset_download("chaitu20/ipl-dataset2008-2025")
print("Path to dataset files:", path)

for file in os.listdir(path):
    if file.endswith('.csv'):
        print(f"\n--- Exploring {file} ---")
        df = pd.read_csv(os.path.join(path, file), encoding='utf-8', on_bad_lines='skip')
        print("Columns:", df.columns.tolist())
        print(df.head(2))
