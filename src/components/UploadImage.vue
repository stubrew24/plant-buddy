<template>
	<div class="container">
		<div class="header">
			<h1>Upload Image</h1>
		</div>

		<div class="image">
			<img :src="imageSrc" />
		</div>

		<div class="upload">
			<label for="image-upload">
				Select a File
			</label>
			<input
				type="file"
				name="image-upload"
				id="image-upload"
				@change="uploadImage"
				class="custom-file-input"
				hidden
			/>
		</div>
	</div>
</template>

<script>
import { storage } from "../firebaseConfig";
import placeholder from "@/assets/placeholder.png";

export default {
	name: "UploadImage",
	data() {
		return {
			imageUrl: "",
		};
	},
	methods: {
		async uploadImage(e) {
			const [file] = e.target.files;
			const storageRef = storage.ref(file.name);
			await storageRef.put(file);
			storageRef.getDownloadURL().then((url) => {
				this.imageUrl = url;
			});
		},
	},
	computed: {
		imageSrc() {
			return this.imageUrl || placeholder;
		},
	},
};
</script>

<style>
h1 {
	text-align: center;
	filter: drop-shadow(1px 1px 1px var(--background));
}

img {
	box-sizing: border-box;
	border: 2px solid var(--dark-green);
	box-shadow: 5px 5px var(--dark-green);
	width: 80%;
	margin: 10%;
	aspect-ratio: 1 / 1;
	object-fit: cover;
	transform: translateX(-4px);
}

label {
	box-sizing: border-box;
	background-color: var(--dark-green);
	color: var(--background);
	display: block;
	width: 100%;
	text-align: center;
	font-size: 24px;
	line-height: 72px;
	cursor: pointer;
}

.container {
	display: flex;
	flex-direction: column;
	justify-items: space-between;
	align-items: center;
	height: 100vh;
}

.header {
	position: relative;
	width: 100%;
	background-color: var(--light-green);
	color: var(--dark-green);
	box-shadow: 0px 6px var(--dark-green);
	flex: none;
}

.image {
	flex-grow: 1;
}

.upload {
	flex: none;
	width: 100%;
}
</style>
