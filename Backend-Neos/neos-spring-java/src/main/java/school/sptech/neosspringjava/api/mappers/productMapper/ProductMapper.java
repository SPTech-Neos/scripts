package school.sptech.neosspringjava.api.mappers.productMapper;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;

import school.sptech.neosspringjava.api.dtos.produtcDto.ProductRequest;
import school.sptech.neosspringjava.api.dtos.produtcDto.ProductResponse;
import school.sptech.neosspringjava.domain.model.product.Product;

@Component
public class ProductMapper {

    public static ProductResponse toProductResponse(Product product) {
        return new ProductResponse(product.getId(), product.getName(), product.getBrand(), product.getImgUrl(), product.getType(), product.getValue(),product.getEstablishment() );
    }

    public static List<ProductResponse> toProductResponse(List<Product> product) {
        return product.stream().map(ProductMapper::toProductResponse).collect(Collectors.toList());
    }
   
}
