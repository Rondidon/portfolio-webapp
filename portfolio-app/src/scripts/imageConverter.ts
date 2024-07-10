export type AssetType = "favicon" | "image";

const assetRootLocation = `${process.env.PUBLIC_URL}/assets`;

const toAssetLocation = (assetName: string, assetType: AssetType) => {
  // regular expression for "filename.fileending"
  const validNameRegex = /^[a-zA-Z0-9-_]+\.[a-zA-Z0-9]+$/;

  if (!validNameRegex.test(assetName)) {
    throw new Error("assetName must match the schema 'filename.fileending'.");
  }
  if (assetType === "favicon") {
    return `${assetRootLocation}/${assetType}/${assetName}`;
  }
  return `${assetRootLocation}/images/${assetName}`;
};

export default toAssetLocation;
