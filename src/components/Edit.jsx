"use client";
import { Envelope, PencilToLine } from "@gravity-ui/icons";
import { Button, Select, FieldError, Input, Label, ListBox, Modal, Surface, TextArea, TextField } from "@heroui/react";


const Edit = ({data}) => {
 const onSubmit =async(e)=>{
    e.preventDefault();
    const formData =new FormData(e.currentTarget);
    const destination =Object.fromEntries(formData.entries());
    console.log(destination);

    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${data._id}`,{

       method:'PATCH',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(destination)
    
    })
    const datas =await res.json();
    console.log(datas);


 }

  return (
    <div>
      <Modal>
        <Button variant="outline" className="flex gap-1 items-center"><PencilToLine></PencilToLine>Edit</Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-9/11">
              <Modal.CloseTrigger />
              <Modal.Header>

                <Modal.Heading className="flex items-center gap-2"> <PencilToLine></PencilToLine>Edit</Modal.Heading>

              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form onSubmit={onSubmit}
                    className="my-13 rounded-lg p-10 space-y-8 max-w-12/12 mx-auto shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
                  >
                    <h2 className="text-center text-3xl font-bold">Edit Destination</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Destination Name */}
                      <div className="md:col-span-2">
                        <TextField defaultValue={data.destinationName} name="destinationName" isRequired>
                          <Label>Destination Name</Label>
                          <Input placeholder="Bali Paradise" className="rounded-2xl" />
                          <FieldError />
                        </TextField>
                      </div>

                      {/* Country */}
                      <TextField defaultValue={data.country} name="country" isRequired>
                        <Label>Country</Label>
                        <Input placeholder="Indonesia" className="rounded-2xl" />
                        <FieldError />
                      </TextField>

                      {/* Category - Updated Select Component */}
                      <div>
                        <Select defaultValue={data.category}
                          name="category"
                          isRequired
                          className="w-full"
                          placeholder="Select category"
                        >
                          <Label>Category</Label>
                          <Select.Trigger className="rounded-2xl">
                            <Select.Value />
                            <Select.Indicator />
                          </Select.Trigger>
                          <Select.Popover>
                            <ListBox>
                              <ListBox.Item id="Beach" textValue="Beach">
                                Beach
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                              <ListBox.Item id="Mountain" textValue="Mountain">
                                Mountain
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                              <ListBox.Item id="City" textValue="City">
                                City
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                              <ListBox.Item id="Adventure" textValue="Adventure">
                                Adventure
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                              <ListBox.Item id="Cultural" textValue="Cultural">
                                Cultural
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                              <ListBox.Item id="Luxury" textValue="Luxury">
                                Luxury
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                            </ListBox>
                          </Select.Popover>
                        </Select>
                      </div>

                      {/* Price */}
                      <TextField defaultValue={data.price} name="price" type="number" isRequired>
                        <Label>Price (USD)</Label>
                        <Input
                          type="number"
                          placeholder="1299"
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>

                      {/* Duration */}
                      <TextField defaultValue={data.duration} name="duration" isRequired>
                        <Label>Duration</Label>
                        <Input
                          placeholder="7 Days / 6 Nights"
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>

                      {/* Departure Date */}
                      <div className="md:col-span-2">
                        <TextField defaultValue={data.departureDate} name="departureDate" type="date" isRequired>
                          <Label>Departure Date</Label>
                          <Input type="date" className="rounded-2xl" />
                          <FieldError />
                        </TextField>
                      </div>

                      {/* Image URL - Removed preview */}
                      <div className="md:col-span-2">
                        <TextField defaultValue={data.imageUrl} name="imageUrl" isRequired>
                          <Label>Image URL</Label>
                          <Input
                            type="url"
                            placeholder="https://example.com/bali-paradise.jpg"
                            className="rounded-2xl"
                          />
                          <FieldError />
                        </TextField>
                      </div>

                      {/* Description */}
                      <div className="md:col-span-2">
                        <TextField defaultValue={data.description} name="description" isRequired>
                          <Label>Description</Label>
                          <TextArea
                            placeholder="Describe the travel experience..."
                            className="rounded-3xl"
                          />
                          <FieldError />
                        </TextField>
                      </div>
                    </div>

                    {/* Buttons */}

                    <Modal.Footer>
                      <Button slot="close" variant="secondary">
                        Cancel
                      </Button>
                      <Button slot="close">Save Changes</Button>
                    </Modal.Footer>

                  </form>
                </Surface>
              </Modal.Body>
             
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default Edit;