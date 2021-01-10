import Container from "mobro/lib/component/container";
import Image from "mobro/components/widget/Image";

export default Container.create("widget.image", Image)
    .redux()
    .generate();