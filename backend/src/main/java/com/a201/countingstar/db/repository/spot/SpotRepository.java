package com.a201.countingstar.db.repository.spot;

import com.a201.countingstar.db.entity.spot.Spot;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SpotRepository extends JpaRepository<Spot, Integer> {

}
