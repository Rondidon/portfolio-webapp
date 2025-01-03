const assetRootLocation = `${process.env.PUBLIC_URL}/assets`;

const toAssetLocation = (assetName: string) => {
  // regular expression for "filename.fileending"
  const validNameRegex = /^[a-zA-Z0-9-_]+\.[a-zA-Z0-9]+$/;

  if (!validNameRegex.test(assetName)) {
    throw new Error(
      "wrong assetName: " +
        assetName +
        ". Must match the schema 'filename.fileending'."
    );
  }
  if (assetName.endsWith(".png")) {
    return `${assetRootLocation}/images/png/${assetName}`;
  }
  if (assetName.endsWith(".ico")) {
    return `${assetRootLocation}/images/ico/${assetName}`;
  }
  if (assetName.endsWith(".webp")) {
    return `${assetRootLocation}/images/webp/${assetName}`;
  }
  if (assetName.endsWith(".svg")) {
    return `${assetRootLocation}/images/svg/${assetName}`;
  }
  return `${assetRootLocation}/images/${assetName}`;
};

export default toAssetLocation;
