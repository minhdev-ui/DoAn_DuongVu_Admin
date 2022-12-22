import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import ReactQuill from "react-quill";
import { toast } from "react-toastify";
import PreviewImage from "../shares/previewImage";
import SectionHeader from "../shares/SectionHeader";
import SelectOptions from "../shares/SelectOptions";

const Cart = () => {
  const [desc, setDesc] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleChangeImage = (imageUrl) => {
    setImageUrl(URL.createObjectURL(imageUrl));
    console.log(imageUrl);
  };

  const notify = (type) => {
    switch(type) {
        case 'success': {
            toast.success("Thêm Thành Công")
            break
        }
        case 'error': {
            toast.error("Lỗi")
            break
        }
        default:
            return
    }
  }
  return (
    <Stack padding={10} sx={{ border: "1px solid #000" }}>
      <SectionHeader
        title="Thêm sản phẩm"
        sx={{ fontSize: 14, textAlign: "left", marginBottom: 5 }}
      />
      <Stack direction="column" gap={5}>
        <Stack direction={"row"} justifyContent="space-between" gap={5}>
          <TextField variant="outlined" label="Tên sản phẩm" sx={{ flex: 1 }} />
          <SelectOptions
            options={[
              {
                label: "Đồ ăn",
                value: "food",
              },
              {
                label: "Đồ uống",
                value: "drink",
              },
            ]}
          />
        </Stack>
        <Stack direction="row" justifyContent="space-between" gap={10}>
          <TextField variant="outlined" label="Số lượng" sx={{ flex: 1 }} />
          <TextField variant="outlined" label="Giá bán" sx={{ flex: 1 }} />
          <TextField variant="outlined" label="Giảm giá" sx={{ flex: 1 }} />
        </Stack>
        <Stack direction="column">
          <Typography align="left" fontSize={20}>
            Mô tả:
          </Typography>
          <ReactQuill theme="snow" value={desc} onChange={setDesc} />
        </Stack>
        <Stack direction={"column"} mt={5}>
          <Typography align="left" fontSize={20}>
            Ảnh
          </Typography>
          <Button variant="contained" component="label">
            Upload
            <input
              hidden
              accept="image/*"
              multiple
              type="file"
              onChange={(e) => handleChangeImage(e.target.files[0])}
            />
          </Button>
          {imageUrl && (
            <Stack padding={"10px 0"}>
              <PreviewImage image={imageUrl} />
            </Stack>
          )}
        </Stack>
        <Stack direction={"row"} justifyContent="flex-end" gap={5}>
          <Button
            sx={{ backgroundColor: "#B1B2FF", color: "#000" }}
            variant="contained"
            onClick={() => notify('success')}
          >
            Thêm mới
          </Button>
          <Button variant="contained" sx={{ backgroundColor: "#EF5570" }}>
            Hủy
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Cart;
