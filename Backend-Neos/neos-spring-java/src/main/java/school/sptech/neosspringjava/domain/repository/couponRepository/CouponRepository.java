package school.sptech.neosspringjava.domain.repository.couponRepository;

import org.springframework.data.jpa.repository.JpaRepository;

import school.sptech.neosspringjava.domain.model.coupon.Coupon;

public interface CouponRepository extends JpaRepository <Coupon , Integer>{

}
