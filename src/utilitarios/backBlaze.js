const {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
  HeadObjectCommand,
} = require('@aws-sdk/client-s3')

const s3 = new S3Client({
  endpoint: `https://${process.env.ENDPOINT_BACKBLAZE}`,
  region: process.env.REGION,
  credentials: {
    accessKeyId: process.env.KEY_ID,
    secretAccessKey: process.env.APP_KEY,
  },
})

const enviarImagem = async (path, buffer, mimetype) => {
  await s3.send(
    new PutObjectCommand({
      Bucket: process.env.BUCKET_NAME,
      Key: path,
      Body: buffer,
      ContentType: mimetype,
    })
  )

  return {
    path,
    url: `https://${process.env.BUCKET_NAME}.${process.env.ENDPOINT_BACKBLAZE}/${path}`,
  }
}
const detalharImagem = async (path) => {
  try {
    await s3.send(
      new HeadObjectCommand({
        Bucket: process.env.BUCKET_NAME,
        Key: path,
      })
    )
  } catch (error) {
    if (error.name === "NotFound") {
      console.log("O objeto não existe no repositório.");
    } else {
      console.error("Erro ao verificar a existência do objeto:", error);
    }
  }
}

const excluirImagem = async (path) => {
  try {
    await s3.send(
      new DeleteObjectCommand({
        Bucket: process.env.BUCKET_NAME,
        Key: path,
      })
    )
  } catch (error) {
    if (error.name === "NotFound") {
      console.log("O objeto não existe no repositório.");
    } else {
      console.error(`Ocorreu um erro ao excluir a imagem ${path}: ${error}`)
    }
  }

}

module.exports = {
  enviarImagem,
  detalharImagem,
  excluirImagem,
}
